# DaisyUI Usage Guide for Meeplewood

This guide shows you how to properly use DaisyUI components in the Meeplewood project with the Forest theme.

## Basic Principles

### 1. DaisyUI Component Classes
DaisyUI provides semantic component classes that work with Tailwind. They automatically adapt to the active theme (Forest).

### 2. Theme-Aware Colors
Use DaisyUI color tokens instead of hardcoded colors:
- `bg-base-100` - Main background
- `bg-base-200` - Secondary background (slightly darker)
- `bg-base-300` - Tertiary background (even darker)
- `bg-primary` - Primary color (Forest theme green)
- `bg-secondary` - Secondary accent
- `text-primary-content` - Text that contrasts with primary bg

## Common Components

### Buttons
```tsx
<button className="btn">Default</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
<button className="btn btn-ghost">Ghost</button>
<button className="btn btn-outline">Outline</button>

// Sizes
<button className="btn btn-sm">Small</button>
<button className="btn btn-lg">Large</button>

// States
<button className="btn btn-primary" disabled>Disabled</button>
<button className="btn btn-primary loading">Loading</button>
```

### Cards
```tsx
<div className="card bg-base-100 shadow-xl">
  <figure>
    <img src="/image.jpg" alt="Description" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>Card content goes here</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Action</button>
    </div>
  </div>
</div>
```

### Navigation Bar
```tsx
<div className="navbar bg-base-200">
  <div className="navbar-start">
    <a className="btn btn-ghost text-xl">Brand</a>
  </div>
  <div className="navbar-center">
    <ul className="menu menu-horizontal px-1">
      <li><a>Link 1</a></li>
      <li><a>Link 2</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn btn-primary">Login</button>
  </div>
</div>
```

### Forms
```tsx
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">What is your name?</span>
  </label>
  <input 
    type="text" 
    placeholder="Type here" 
    className="input input-bordered w-full max-w-xs" 
  />
  <label className="label">
    <span className="label-text-alt">Alt label</span>
  </label>
</div>

// Select
<select className="select select-bordered w-full max-w-xs">
  <option disabled selected>Pick one</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>

// Checkbox
<input type="checkbox" className="checkbox" />
<input type="checkbox" className="checkbox checkbox-primary" />

// Radio
<input type="radio" name="radio-1" className="radio" />
<input type="radio" name="radio-1" className="radio radio-primary" />
```

### Tables
```tsx
<div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover">
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
    </tbody>
  </table>
</div>

// Variations
<table className="table table-zebra">...</table>
<table className="table table-pin-rows">...</table>
```

### Alerts
```tsx
<div className="alert alert-info">
  <span>Info alert message</span>
</div>

<div className="alert alert-success">
  <span>Success alert message</span>
</div>

<div className="alert alert-warning">
  <span>Warning alert message</span>
</div>

<div className="alert alert-error">
  <span>Error alert message</span>
</div>
```

### Modals
```tsx
// Button to open modal
<button className="btn" onClick={() => document.getElementById('my_modal').showModal()}>
  Open Modal
</button>

// Modal
<dialog id="my_modal" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Modal content here</p>
    <div className="modal-action">
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
```

### Loading Indicators
```tsx
<span className="loading loading-spinner"></span>
<span className="loading loading-dots"></span>
<span className="loading loading-ring"></span>
<span className="loading loading-ball"></span>

// With colors
<span className="loading loading-spinner loading-lg text-primary"></span>
```

### Badges
```tsx
<div className="badge">Default</div>
<div className="badge badge-primary">Primary</div>
<div className="badge badge-secondary">Secondary</div>
<div className="badge badge-accent">Accent</div>
<div className="badge badge-ghost">Ghost</div>
```

## Custom Styling with DaisyUI

### Option 1: Extend DaisyUI Classes
```tsx
// Combine DaisyUI with Tailwind utilities
<button className="btn btn-primary rounded-full px-8 shadow-2xl">
  Custom Button
</button>
```

### Option 2: Custom CSS in globals.css
```css
@layer components {
  .my-custom-card {
    @apply card bg-base-200 shadow-xl;
    background-image: url('/pattern.png');
  }
  
  .my-custom-card:hover {
    @apply shadow-2xl;
    transform: translateY(-4px);
  }
}
```

### Option 3: Inline Conditional Classes
```tsx
<Link
  href={href}
  className={`
    btn
    ${isActive ? 'btn-primary shadow-lg' : 'btn-ghost'}
    ${isHovered ? 'bg-base-300' : ''}
  `}
>
  Link
</Link>
```

## Forest Theme Colors

The Forest theme provides these semantic colors:
- **Primary**: Dark green (#1eb854 variants)
- **Secondary**: Teal/cyan accents
- **Accent**: Orange/amber highlights
- **Neutral**: Dark grays
- **Base**: Very dark backgrounds
- **Info**: Blue
- **Success**: Green
- **Warning**: Yellow
- **Error**: Red

## Tips for Meeplewood

1. **Responsive Design**: Use `sm:`, `md:`, `lg:` prefixes
   ```tsx
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
   ```

2. **Stick to Theme Colors**: Avoid hardcoded colors like `bg-gray-500`
   ```tsx
   // ❌ Don't
   <div className="bg-gray-500 text-gray-900">
   
   // ✅ Do
   <div className="bg-base-200 text-base-content">
   ```

3. **Combine with Tailwind**: DaisyUI works seamlessly with Tailwind utilities
   ```tsx
   <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
   ```

4. **Use State Classes**: DaisyUI provides state variants
   ```tsx
   <button className="btn btn-primary btn-active">Active</button>
   <button className="btn btn-primary btn-disabled">Disabled</button>
   ```

## Resources

- [DaisyUI Components](https://daisyui.com/components/)
- [DaisyUI Themes](https://daisyui.com/docs/themes/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
