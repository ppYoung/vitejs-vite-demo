import { defineComponent, useSlots } from 'vue';

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'default',
    },
    loadingText: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'normal',
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const slots = useSlots();

    interface KVStr {
      [k: string]: string | string[];
    }

    const TYPE_CLASS_MAP: KVStr = {
      default: ['bg-white', 'active:bg-gray-200', 'border', 'border-gray-200'],
      primary: ['bg-blue-500', 'active:bg-blue-400'],
      success: ['bg-emerald-500', 'active:bg-emerald-400'],
      warning: ['bg-amber-500', 'active:bg-amber-500'],
      danger: ['bg-red-500', 'active:bg-red-500'],
    };

    const SIZE_CLASS_MAP: KVStr = {
      small: ['min-w-12', 'min-h-6', 'tracking-normal', 'text-sm', 'px-1.5'],
      normal: ['min-w-16', 'min-h-8', 'tracking-wide', 'text-base', 'px-2'],
      large: ['min-w-20', 'min-h-10', 'tracking-wider', 'text-large', 'px-4'],
    };

    const classes = [
      'd-button',
      props.type === 'default' ? 'color-dark' : 'color-light',
      'inline-flex',
      'justify-center',
      'items-center',
      'rounded-md',
      props.disabled ? '' : 'hover:opacity-90',
      'disabled:opacity-50',
      'disabled:cursor-not-allowed',
      TYPE_CLASS_MAP[props.type],
      SIZE_CLASS_MAP[props.size],
    ];

    const renderIcon = () => {
      if (props.loading) {
        return slots.loadingIcon ? (
          slots.loadingIcon()
        ) : (
          <i class={['inline-block', 'i-eos-icons:loading', 'mr-0.5']} />
        );
      }

      if (slots.icon) {
        return slots.icon();
      }
    };

    const onClick = () => {
      if (props.loading || props.disabled) return;
      emit('click');
    };

    return () => (
      <button class={classes} onClick={onClick} disabled={props.disabled}>
        {renderIcon()}
        {slots?.default?.()}
      </button>
    );
  },
});
