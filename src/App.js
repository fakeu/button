import React from 'react';
import Button from './components/Button';
import './App.scss';
import spider from './spiderman.svg';

const App = () => {
    return (
        <div className = 'container'>
            <h5>Link</h5>
            <Button
                component = 'a'
                text = 'Hello default'
                url = 'http://google.ru'
            />
            <h5>Link with icon and _blank</h5>
            <Button
                targetBlank
                component = 'a'
                icon = { spider }
                text = 'Hello default'
                url = 'https://google.ru'
            />
            <br />
            <Button
                iconRight
                targetBlank
                component = 'a'
                icon = { spider }
                text = 'Hello default'
                url = 'https://google.ru'
            />
            <h5>Buttons</h5>
            <div className = 'btn_group '>

                <Button
                    accent = 'btn_default'
                    icon = { spider }
                    size = 'btn_sm'
                    text = 'Button'
                />

                <Button
                    accent = 'btn_default'
                    size = 'btn_md'
                    text = 'Button'
                />

                <Button
                    accent = 'btn_default'
                    size = 'btn_lg'
                    text = 'Button'
                />

                <Button
                    accent = 'btn_default'
                    size = 'btn_lg'
                    text = 'Button with event'
                    onClick = { (e) => {
                        e.preventDefault();
                        alert('Event');
                    } }
                />

            </div>
            <hr />
            <div className = 'btn_group '>
                <Button
                    accent = 'btn_secondary'
                    size = 'btn_sm'
                    text = 'Button'
                />

                <Button
                    accent = 'btn_secondary'
                    icon = { spider }
                    size = 'btn_md'
                    text = 'Button'
                />

                <Button
                    disabled
                    accent = 'btn_secondary'
                    icon = { spider }
                    size = 'btn_md'
                    text = 'Button disabled'
                />

                <Button
                    accent = 'btn_secondary'
                    size = 'btn_lg'
                    text = 'Button'
                />

                <Button
                    iconRight
                    accent = 'btn_secondary'
                    icon = { spider }
                    size = 'btn_lg'
                    text = 'Button'
                />
            </div>
            <hr />
            <div className = 'btn_group '>
                <Button
                    accent = 'btn_error'
                    size = 'btn_sm'
                    text = 'Button'
                />

                <Button
                    accent = 'btn_error'
                    size = 'btn_md'
                    text = 'Button'
                />

                <Button
                    accent = 'btn_error'
                    icon = { spider }
                    size = 'btn_lg'
                    text = 'Button'
                />

                <Button
                    disabled
                    iconRight
                    isLoading
                    accent = 'btn_error'
                    icon = { spider }
                    size = 'btn_lg'
                    text = 'Button'
                />
            </div>
            <hr />
            <div className = 'btn_group '>
                <Button
                    disabled
                    isLoading
                    accent = 'btn_default'
                    icon = { spider }
                    size = 'btn_sm'
                />

                <Button
                    accent = 'btn_default'
                    icon = { spider }
                    size = 'btn_sm'
                />

                <Button
                    accent = 'btn_error'
                    icon = { spider }
                    size = 'btn_md'
                />

                <Button
                    accent = 'btn_secondary'
                    icon = { spider }
                    size = 'btn_lg'
                />

                <Button
                    disabled
                    accent = 'btn_secondary'
                    icon = { spider }
                    size = 'btn_lg'
                />
            </div>
        </div>
    );
};

export default App;
