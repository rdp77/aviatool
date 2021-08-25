<div class="main-sidebar">
    <aside id="sidebar-wrapper">
        <div class="sidebar-brand">
            <a href="{{ url('/') }}">{{ __('pages.title') }}</a>
        </div>
        <div class="sidebar-brand sidebar-brand-sm">
            <a href="{{ url('/') }}">{{ __('pages.brand') }}</a>
        </div>
        <ul class="sidebar-menu">
            <li class="menu-header">{{ __('Menu Utama') }}</li>
            <li class="{{ Request::route()->getName() == 'home' ? 'active' : '' }}">
                <a href="{{ route('home') }}" class="nav-link"><i
                        class="fas fa-fire"></i><span>{{ __('Dashboard') }}</span></a>
            </li>
            <li class="{{ Request::route()->getName() == 'borrow.index' ? 'active' : (
                Request::route()->getName() == 'borrow.create' ? 'active' : (
                    Request::route()->getName() == 'checkTransaction' ? 'active' : '')) }}">
                <a class="nav-link" href="{{ route('borrow.index') }}"><i class="fas fa-exchange-alt"></i>
                    <span>{{ __('Transaksi') }}</span></a>
            </li>
            <li class="{{ Request::route()->getName() == 'history.index' ? 'active' : '' }}">
                <a class="nav-link" href="{{ route('history.index') }}"><i class="fas fa-undo"></i>
                    <span>{{ __('History') }}</span></a>
            </li>
            <li class="menu-header">{{ __('Master') }}</li>
            <li class="{{ Request::route()->getName() == 'users.index' ? 'active' : (
                Request::route()->getName() == 'users.create' ? 'active' : (
                    Request::route()->getName() == 'users.edit' ? 'active' : '')) }}">
                <a class="nav-link" href="{{ route('users.index') }}"><i class="fas fa-users"></i>
                    <span>{{ __('Pengguna') }}</span></a>
            </li>
            <li class="{{ Request::route()->getName() == 'items.index' ? 'active' : (
                    Request::route()->getName() == 'items.create' ? 'active' : (
                        Request::route()->getName() == 'items.edit' ? 'active' : '')) }}">
                <a class="nav-link" href="{{ route('items.index') }}"><i class="fas fa-boxes"></i>
                    <span>{{ __('Barang') }}</span></a>
            </li>
            <li class="{{ Request::route()->getName() == 'workshop.index' ? 'active' : (
                Request::route()->getName() == 'workshop.create' ? 'active' : '') }}">
                <a class="nav-link" href="{{ route('workshop.index') }}"><i class="fas fa-archive"></i>
                    <span>{{ __('Workshop') }}</span></a>
            </li>
            <li class="{{ Request::route()->getName() == 'class.index' ? 'active' : (
                Request::route()->getName() == 'class.create' ? 'active' : (
                    Request::route()->getName() == 'class.edit' ? 'active' : '')) }}">
                <a class="nav-link" href="{{ route('class.index') }}"><i class="fas fa-chalkboard-teacher"></i>
                    <span>{{ __('Kelas') }}</span></a>
            </li>
            <li class="{{ Request::route()->getName() == 'student.index' ? 'active' : (
                Request::route()->getName() == 'student.create' ? 'active' : (
                    Request::route()->getName() == 'student.edit' ? 'active' : '')) }}">
                <a class="nav-link" href="{{ route('student.index') }}"><i class="fas fa-user"></i>
                    <span>{{ __('Pelajar') }}</span></a>
            </li>
        </ul>
    </aside>
</div>