# `oauthClient` Submodule <a name="`oauthClient` Submodule" id="@cdktn/provider-cloudflare.oauthClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OauthClient <a name="OauthClient" id="@cdktn/provider-cloudflare.oauthClient.OauthClient"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client cloudflare_oauth_client}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer"></a>

```typescript
import { oauthClient } from '@cdktn/provider-cloudflare'

new oauthClient.OauthClient(scope: Construct, id: string, config: OauthClientConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig">OauthClientConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig">OauthClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetAllowedCorsOrigins">resetAllowedCorsOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetClientUri">resetClientUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetLogoUri">resetLogoUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetOauthClientId">resetOauthClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetPolicyUri">resetPolicyUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetPostLogoutRedirectUris">resetPostLogoutRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetTosUri">resetTosUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetVisibility">resetVisibility</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedCorsOrigins` <a name="resetAllowedCorsOrigins" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetAllowedCorsOrigins"></a>

```typescript
public resetAllowedCorsOrigins(): void
```

##### `resetClientUri` <a name="resetClientUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetClientUri"></a>

```typescript
public resetClientUri(): void
```

##### `resetLogoUri` <a name="resetLogoUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetLogoUri"></a>

```typescript
public resetLogoUri(): void
```

##### `resetOauthClientId` <a name="resetOauthClientId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetOauthClientId"></a>

```typescript
public resetOauthClientId(): void
```

##### `resetPolicyUri` <a name="resetPolicyUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetPolicyUri"></a>

```typescript
public resetPolicyUri(): void
```

##### `resetPostLogoutRedirectUris` <a name="resetPostLogoutRedirectUris" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetPostLogoutRedirectUris"></a>

```typescript
public resetPostLogoutRedirectUris(): void
```

##### `resetTosUri` <a name="resetTosUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetTosUri"></a>

```typescript
public resetTosUri(): void
```

##### `resetVisibility` <a name="resetVisibility" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetVisibility"></a>

```typescript
public resetVisibility(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OauthClient resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isConstruct"></a>

```typescript
import { oauthClient } from '@cdktn/provider-cloudflare'

oauthClient.OauthClient.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformElement"></a>

```typescript
import { oauthClient } from '@cdktn/provider-cloudflare'

oauthClient.OauthClient.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformResource"></a>

```typescript
import { oauthClient } from '@cdktn/provider-cloudflare'

oauthClient.OauthClient.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport"></a>

```typescript
import { oauthClient } from '@cdktn/provider-cloudflare'

oauthClient.OauthClient.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OauthClient resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OauthClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OauthClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OauthClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUriVerification">clientUriVerification</a></code> | <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference">OauthClientClientUriVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.hasRotatedSecret">hasRotatedSecret</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.promotedAt">promotedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.allowedCorsOriginsInput">allowedCorsOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientNameInput">clientNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUriInput">clientUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.grantTypesInput">grantTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.logoUriInput">logoUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.oauthClientIdInput">oauthClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.policyUriInput">policyUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.postLogoutRedirectUrisInput">postLogoutRedirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.redirectUrisInput">redirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.responseTypesInput">responseTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tokenEndpointAuthMethodInput">tokenEndpointAuthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tosUriInput">tosUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.visibilityInput">visibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.allowedCorsOrigins">allowedCorsOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientName">clientName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUri">clientUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.grantTypes">grantTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.logoUri">logoUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.oauthClientId">oauthClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.policyUri">policyUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.postLogoutRedirectUris">postLogoutRedirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.redirectUris">redirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.responseTypes">responseTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tokenEndpointAuthMethod">tokenEndpointAuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tosUri">tosUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `clientUriVerification`<sup>Required</sup> <a name="clientUriVerification" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUriVerification"></a>

```typescript
public readonly clientUriVerification: OauthClientClientUriVerificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference">OauthClientClientUriVerificationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `hasRotatedSecret`<sup>Required</sup> <a name="hasRotatedSecret" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.hasRotatedSecret"></a>

```typescript
public readonly hasRotatedSecret: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `promotedAt`<sup>Required</sup> <a name="promotedAt" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.promotedAt"></a>

```typescript
public readonly promotedAt: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `allowedCorsOriginsInput`<sup>Optional</sup> <a name="allowedCorsOriginsInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.allowedCorsOriginsInput"></a>

```typescript
public readonly allowedCorsOriginsInput: string[];
```

- *Type:* string[]

---

##### `clientNameInput`<sup>Optional</sup> <a name="clientNameInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientNameInput"></a>

```typescript
public readonly clientNameInput: string;
```

- *Type:* string

---

##### `clientUriInput`<sup>Optional</sup> <a name="clientUriInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUriInput"></a>

```typescript
public readonly clientUriInput: string;
```

- *Type:* string

---

##### `grantTypesInput`<sup>Optional</sup> <a name="grantTypesInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.grantTypesInput"></a>

```typescript
public readonly grantTypesInput: string[];
```

- *Type:* string[]

---

##### `logoUriInput`<sup>Optional</sup> <a name="logoUriInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.logoUriInput"></a>

```typescript
public readonly logoUriInput: string;
```

- *Type:* string

---

##### `oauthClientIdInput`<sup>Optional</sup> <a name="oauthClientIdInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.oauthClientIdInput"></a>

```typescript
public readonly oauthClientIdInput: string;
```

- *Type:* string

---

##### `policyUriInput`<sup>Optional</sup> <a name="policyUriInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.policyUriInput"></a>

```typescript
public readonly policyUriInput: string;
```

- *Type:* string

---

##### `postLogoutRedirectUrisInput`<sup>Optional</sup> <a name="postLogoutRedirectUrisInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.postLogoutRedirectUrisInput"></a>

```typescript
public readonly postLogoutRedirectUrisInput: string[];
```

- *Type:* string[]

---

##### `redirectUrisInput`<sup>Optional</sup> <a name="redirectUrisInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.redirectUrisInput"></a>

```typescript
public readonly redirectUrisInput: string[];
```

- *Type:* string[]

---

##### `responseTypesInput`<sup>Optional</sup> <a name="responseTypesInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.responseTypesInput"></a>

```typescript
public readonly responseTypesInput: string[];
```

- *Type:* string[]

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `tokenEndpointAuthMethodInput`<sup>Optional</sup> <a name="tokenEndpointAuthMethodInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tokenEndpointAuthMethodInput"></a>

```typescript
public readonly tokenEndpointAuthMethodInput: string;
```

- *Type:* string

---

##### `tosUriInput`<sup>Optional</sup> <a name="tosUriInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tosUriInput"></a>

```typescript
public readonly tosUriInput: string;
```

- *Type:* string

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.visibilityInput"></a>

```typescript
public readonly visibilityInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `allowedCorsOrigins`<sup>Required</sup> <a name="allowedCorsOrigins" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.allowedCorsOrigins"></a>

```typescript
public readonly allowedCorsOrigins: string[];
```

- *Type:* string[]

---

##### `clientName`<sup>Required</sup> <a name="clientName" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientName"></a>

```typescript
public readonly clientName: string;
```

- *Type:* string

---

##### `clientUri`<sup>Required</sup> <a name="clientUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUri"></a>

```typescript
public readonly clientUri: string;
```

- *Type:* string

---

##### `grantTypes`<sup>Required</sup> <a name="grantTypes" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.grantTypes"></a>

```typescript
public readonly grantTypes: string[];
```

- *Type:* string[]

---

##### `logoUri`<sup>Required</sup> <a name="logoUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.logoUri"></a>

```typescript
public readonly logoUri: string;
```

- *Type:* string

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.oauthClientId"></a>

```typescript
public readonly oauthClientId: string;
```

- *Type:* string

---

##### `policyUri`<sup>Required</sup> <a name="policyUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.policyUri"></a>

```typescript
public readonly policyUri: string;
```

- *Type:* string

---

##### `postLogoutRedirectUris`<sup>Required</sup> <a name="postLogoutRedirectUris" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.postLogoutRedirectUris"></a>

```typescript
public readonly postLogoutRedirectUris: string[];
```

- *Type:* string[]

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* string[]

---

##### `responseTypes`<sup>Required</sup> <a name="responseTypes" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.responseTypes"></a>

```typescript
public readonly responseTypes: string[];
```

- *Type:* string[]

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `tokenEndpointAuthMethod`<sup>Required</sup> <a name="tokenEndpointAuthMethod" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tokenEndpointAuthMethod"></a>

```typescript
public readonly tokenEndpointAuthMethod: string;
```

- *Type:* string

---

##### `tosUri`<sup>Required</sup> <a name="tosUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tosUri"></a>

```typescript
public readonly tosUri: string;
```

- *Type:* string

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OauthClientClientUriVerification <a name="OauthClientClientUriVerification" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerification.Initializer"></a>

```typescript
import { oauthClient } from '@cdktn/provider-cloudflare'

const oauthClientClientUriVerification: oauthClient.OauthClientClientUriVerification = { ... }
```


### OauthClientConfig <a name="OauthClientConfig" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.Initializer"></a>

```typescript
import { oauthClient } from '@cdktn/provider-cloudflare'

const oauthClientConfig: oauthClient.OauthClientConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.accountId">accountId</a></code> | <code>string</code> | Account identifier tag. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.clientName">clientName</a></code> | <code>string</code> | Human-readable name of the OAuth client. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.grantTypes">grantTypes</a></code> | <code>string[]</code> | Array of OAuth grant types the client is allowed to use. `authorization_code` is required; `refresh_token` may be included optionally. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.redirectUris">redirectUris</a></code> | <code>string[]</code> | Array of allowed redirect URIs for the client. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.responseTypes">responseTypes</a></code> | <code>string[]</code> | Array of OAuth response types the client is allowed to use. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.scopes">scopes</a></code> | <code>string[]</code> | Array of OAuth scopes the client is allowed to request. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.tokenEndpointAuthMethod">tokenEndpointAuthMethod</a></code> | <code>string</code> | The authentication method the client uses at the token endpoint. Available values: "none", "client_secret_basic", "client_secret_post". |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.allowedCorsOrigins">allowedCorsOrigins</a></code> | <code>string[]</code> | Array of allowed CORS origins. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.clientUri">clientUri</a></code> | <code>string</code> | URL of the home page of the client. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.logoUri">logoUri</a></code> | <code>string</code> | URL of the client's logo. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.oauthClientId">oauthClientId</a></code> | <code>string</code> | The unique identifier for an OAuth client. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.policyUri">policyUri</a></code> | <code>string</code> | URL that points to a privacy policy document. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.postLogoutRedirectUris">postLogoutRedirectUris</a></code> | <code>string[]</code> | Array of allowed post-logout redirect URIs. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.tosUri">tosUri</a></code> | <code>string</code> | URL that points to a terms of service document. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.visibility">visibility</a></code> | <code>string</code> | Promote the OAuth client from private to public visibility. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#account_id OauthClient#account_id}

---

##### `clientName`<sup>Required</sup> <a name="clientName" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.clientName"></a>

```typescript
public readonly clientName: string;
```

- *Type:* string

Human-readable name of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#client_name OauthClient#client_name}

---

##### `grantTypes`<sup>Required</sup> <a name="grantTypes" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.grantTypes"></a>

```typescript
public readonly grantTypes: string[];
```

- *Type:* string[]

Array of OAuth grant types the client is allowed to use. `authorization_code` is required; `refresh_token` may be included optionally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#grant_types OauthClient#grant_types}

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* string[]

Array of allowed redirect URIs for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#redirect_uris OauthClient#redirect_uris}

---

##### `responseTypes`<sup>Required</sup> <a name="responseTypes" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.responseTypes"></a>

```typescript
public readonly responseTypes: string[];
```

- *Type:* string[]

Array of OAuth response types the client is allowed to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#response_types OauthClient#response_types}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Array of OAuth scopes the client is allowed to request.

Colon-delimited scopes are not accepted. Dot-delimited scopes are validated against available OAuth API scopes; simple identity scopes are allowed. Protocol scopes `offline_access` and `openid` are added or removed automatically based on `grant_types` and `response_types`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#scopes OauthClient#scopes}

---

##### `tokenEndpointAuthMethod`<sup>Required</sup> <a name="tokenEndpointAuthMethod" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.tokenEndpointAuthMethod"></a>

```typescript
public readonly tokenEndpointAuthMethod: string;
```

- *Type:* string

The authentication method the client uses at the token endpoint. Available values: "none", "client_secret_basic", "client_secret_post".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#token_endpoint_auth_method OauthClient#token_endpoint_auth_method}

---

##### `allowedCorsOrigins`<sup>Optional</sup> <a name="allowedCorsOrigins" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.allowedCorsOrigins"></a>

```typescript
public readonly allowedCorsOrigins: string[];
```

- *Type:* string[]

Array of allowed CORS origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#allowed_cors_origins OauthClient#allowed_cors_origins}

---

##### `clientUri`<sup>Optional</sup> <a name="clientUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.clientUri"></a>

```typescript
public readonly clientUri: string;
```

- *Type:* string

URL of the home page of the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#client_uri OauthClient#client_uri}

---

##### `logoUri`<sup>Optional</sup> <a name="logoUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.logoUri"></a>

```typescript
public readonly logoUri: string;
```

- *Type:* string

URL of the client's logo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#logo_uri OauthClient#logo_uri}

---

##### `oauthClientId`<sup>Optional</sup> <a name="oauthClientId" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.oauthClientId"></a>

```typescript
public readonly oauthClientId: string;
```

- *Type:* string

The unique identifier for an OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#oauth_client_id OauthClient#oauth_client_id}

---

##### `policyUri`<sup>Optional</sup> <a name="policyUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.policyUri"></a>

```typescript
public readonly policyUri: string;
```

- *Type:* string

URL that points to a privacy policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#policy_uri OauthClient#policy_uri}

---

##### `postLogoutRedirectUris`<sup>Optional</sup> <a name="postLogoutRedirectUris" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.postLogoutRedirectUris"></a>

```typescript
public readonly postLogoutRedirectUris: string[];
```

- *Type:* string[]

Array of allowed post-logout redirect URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#post_logout_redirect_uris OauthClient#post_logout_redirect_uris}

---

##### `tosUri`<sup>Optional</sup> <a name="tosUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.tosUri"></a>

```typescript
public readonly tosUri: string;
```

- *Type:* string

URL that points to a terms of service document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#tos_uri OauthClient#tos_uri}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

Promote the OAuth client from private to public visibility.

Only `public` is accepted; demotion to `private` is not supported. Promotion requires a non-empty client name, logo URI, verified client URI host, and at least one non-identity scope.
Available values: "public".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/oauth_client#visibility OauthClient#visibility}

---

## Classes <a name="Classes" id="Classes"></a>

### OauthClientClientUriVerificationOutputReference <a name="OauthClientClientUriVerificationOutputReference" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.Initializer"></a>

```typescript
import { oauthClient } from '@cdktn/provider-cloudflare'

new oauthClient.OauthClientClientUriVerificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerification">OauthClientClientUriVerification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OauthClientClientUriVerification;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerification">OauthClientClientUriVerification</a>

---



