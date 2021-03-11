import React from 'react';
import Button from "./button"


export default function ButtonContainer() {

  return (
    <main>
      <h1>Buttons</h1>
      <div class="btn-grp">
        <p>{`<Button />`}</p>
        <Button />
      </div>
      <br/>
      <div class="btn-grp">
        <p>{`<Button variant="outline" />`}</p>
        <Button variant="outline"/>
      </div>
      <br/>
      <div class="btn-grp">
        <p>{`<Button variant="text" />`}</p>
        <Button variant="text" />
      </div>
      <br/>
      <div class="btn-grp">
        <p>{`<Button disableShadow />`}</p>
        <Button color="primary" disableShadow/>
      </div>
        <div class="btn-grp">
          <p>{`<Button disabled />`}</p>
          <Button disabled/>
        </div>
        <div class="btn-grp">
          <p>{`<Button variant="text" disabled/>`}</p>
          <Button variant="text" disabled />
        </div>
      <div class="btn-grp">
        <p>{`<Button startIcon="add_shopping_cart" />`}</p>
        <Button color="primary" startIcon="add_shopping_cart" />
      </div>      
      <div class="btn-grp">
        <p>{`<Button endIcon="add_shopping_cart" />`}</p>
        <Button color="primary" endIcon="add_shopping_cart" />
      </div>
      <hr />
      {/* Button sizes */}
      <div class="btn-grp">
        <p>{`<Button size="sm" />`}</p>
        <Button color="primary" size="sm" />
      </div>
      <div class="btn-grp">
        <p>{`<Button size="md" />`}</p>
        <Button color="primary" size="md" />
      </div>
      <div class="btn-grp">
        <p>{`<Button size="lg" />`}</p>
        <Button color="primary" size="lg" />
      </div>
      <hr />
      {/* Button colors */}
      <div class="btn-grp">
        <p>{`<Button color="default" />`}</p>
        <Button color="default" />
      </div>
      <div class="btn-grp">
        <p>{`<Button color="primary" />`}</p>
        <Button color="primary" />
      </div>
      <div class="btn-grp">
        <p>{`<Button color="secondary" />`}</p>
        <Button color="secondary" label="Secondary"/>
      </div>
      <div class="btn-grp">
        <p>{`<Button color="danger" />`}</p>
        <Button color="danger" label="Danger"/>
      </div>
    </main>
  )
}