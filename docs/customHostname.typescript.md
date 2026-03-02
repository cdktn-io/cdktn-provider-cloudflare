# `customHostname` Submodule <a name="`customHostname` Submodule" id="@cdktn/provider-cloudflare.customHostname"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomHostname <a name="CustomHostname" id="@cdktn/provider-cloudflare.customHostname.CustomHostname"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/custom_hostname cloudflare_custom_hostname}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.Initializer"></a>

```typescript
import { customHostname } from '@cdktn/provider-cloudflare'

new customHostname.CustomHostname(scope: Construct, id: string, config: CustomHostnameConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig">CustomHostnameConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig">CustomHostnameConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.putSsl">putSsl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.resetCustomMetadata">resetCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.resetCustomOriginServer">resetCustomOriginServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.resetCustomOriginSni">resetCustomOriginSni</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSsl` <a name="putSsl" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.putSsl"></a>

```typescript
public putSsl(value: CustomHostnameSsl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.putSsl.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a>

---

##### `resetCustomMetadata` <a name="resetCustomMetadata" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.resetCustomMetadata"></a>

```typescript
public resetCustomMetadata(): void
```

##### `resetCustomOriginServer` <a name="resetCustomOriginServer" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.resetCustomOriginServer"></a>

```typescript
public resetCustomOriginServer(): void
```

##### `resetCustomOriginSni` <a name="resetCustomOriginSni" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.resetCustomOriginSni"></a>

```typescript
public resetCustomOriginSni(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CustomHostname resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.isConstruct"></a>

```typescript
import { customHostname } from '@cdktn/provider-cloudflare'

customHostname.CustomHostname.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.isTerraformElement"></a>

```typescript
import { customHostname } from '@cdktn/provider-cloudflare'

customHostname.CustomHostname.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.isTerraformResource"></a>

```typescript
import { customHostname } from '@cdktn/provider-cloudflare'

customHostname.CustomHostname.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.generateConfigForImport"></a>

```typescript
import { customHostname } from '@cdktn/provider-cloudflare'

customHostname.CustomHostname.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CustomHostname resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CustomHostname to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CustomHostname that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/custom_hostname#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CustomHostname to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.ownershipVerification">ownershipVerification</a></code> | <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference">CustomHostnameOwnershipVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.ownershipVerificationHttp">ownershipVerificationHttp</a></code> | <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference">CustomHostnameOwnershipVerificationHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.ssl">ssl</a></code> | <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference">CustomHostnameSslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.verificationErrors">verificationErrors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.customMetadataInput">customMetadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.customOriginServerInput">customOriginServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.customOriginSniInput">customOriginSniInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.sslInput">sslInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.customMetadata">customMetadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.customOriginServer">customOriginServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.customOriginSni">customOriginSni</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ownershipVerification`<sup>Required</sup> <a name="ownershipVerification" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.ownershipVerification"></a>

```typescript
public readonly ownershipVerification: CustomHostnameOwnershipVerificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference">CustomHostnameOwnershipVerificationOutputReference</a>

---

##### `ownershipVerificationHttp`<sup>Required</sup> <a name="ownershipVerificationHttp" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.ownershipVerificationHttp"></a>

```typescript
public readonly ownershipVerificationHttp: CustomHostnameOwnershipVerificationHttpOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference">CustomHostnameOwnershipVerificationHttpOutputReference</a>

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.ssl"></a>

```typescript
public readonly ssl: CustomHostnameSslOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference">CustomHostnameSslOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `verificationErrors`<sup>Required</sup> <a name="verificationErrors" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.verificationErrors"></a>

```typescript
public readonly verificationErrors: string[];
```

- *Type:* string[]

---

##### `customMetadataInput`<sup>Optional</sup> <a name="customMetadataInput" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.customMetadataInput"></a>

```typescript
public readonly customMetadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `customOriginServerInput`<sup>Optional</sup> <a name="customOriginServerInput" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.customOriginServerInput"></a>

```typescript
public readonly customOriginServerInput: string;
```

- *Type:* string

---

##### `customOriginSniInput`<sup>Optional</sup> <a name="customOriginSniInput" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.customOriginSniInput"></a>

```typescript
public readonly customOriginSniInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `sslInput`<sup>Optional</sup> <a name="sslInput" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.sslInput"></a>

```typescript
public readonly sslInput: IResolvable | CustomHostnameSsl;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a>

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `customMetadata`<sup>Required</sup> <a name="customMetadata" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.customMetadata"></a>

```typescript
public readonly customMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `customOriginServer`<sup>Required</sup> <a name="customOriginServer" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.customOriginServer"></a>

```typescript
public readonly customOriginServer: string;
```

- *Type:* string

---

##### `customOriginSni`<sup>Required</sup> <a name="customOriginSni" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.customOriginSni"></a>

```typescript
public readonly customOriginSni: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostname.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.customHostname.CustomHostname.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomHostnameConfig <a name="CustomHostnameConfig" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig.Initializer"></a>

```typescript
import { customHostname } from '@cdktn/provider-cloudflare'

const customHostnameConfig: customHostname.CustomHostnameConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig.property.hostname">hostname</a></code> | <code>string</code> | The custom hostname that will point to your hostname via CNAME. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig.property.ssl">ssl</a></code> | <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a></code> | SSL properties used when creating the custom hostname. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig.property.customMetadata">customMetadata</a></code> | <code>{[ key: string ]: string}</code> | Unique key/value metadata for this hostname. These are per-hostname (customer) settings. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig.property.customOriginServer">customOriginServer</a></code> | <code>string</code> | a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig.property.customOriginSni">customOriginSni</a></code> | <code>string</code> | A hostname that will be sent to your custom origin server as SNI for TLS handshake. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

The custom hostname that will point to your hostname via CNAME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/custom_hostname#hostname CustomHostname#hostname}

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig.property.ssl"></a>

```typescript
public readonly ssl: CustomHostnameSsl;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a>

SSL properties used when creating the custom hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/custom_hostname#ssl CustomHostname#ssl}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/custom_hostname#zone_id CustomHostname#zone_id}

---

##### `customMetadata`<sup>Optional</sup> <a name="customMetadata" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig.property.customMetadata"></a>

```typescript
public readonly customMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Unique key/value metadata for this hostname. These are per-hostname (customer) settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/custom_hostname#custom_metadata CustomHostname#custom_metadata}

---

##### `customOriginServer`<sup>Optional</sup> <a name="customOriginServer" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig.property.customOriginServer"></a>

```typescript
public readonly customOriginServer: string;
```

- *Type:* string

a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/custom_hostname#custom_origin_server CustomHostname#custom_origin_server}

---

##### `customOriginSni`<sup>Optional</sup> <a name="customOriginSni" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameConfig.property.customOriginSni"></a>

```typescript
public readonly customOriginSni: string;
```

- *Type:* string

A hostname that will be sent to your custom origin server as SNI for TLS handshake.

This can be a valid subdomain of the zone or custom origin server name or the string ':request_host_header:' which will cause the host header in the request to be used as SNI. Not configurable with default/fallback origin server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/custom_hostname#custom_origin_sni CustomHostname#custom_origin_sni}

---

### CustomHostnameOwnershipVerification <a name="CustomHostnameOwnershipVerification" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerification.Initializer"></a>

```typescript
import { customHostname } from '@cdktn/provider-cloudflare'

const customHostnameOwnershipVerification: customHostname.CustomHostnameOwnershipVerification = { ... }
```


### CustomHostnameOwnershipVerificationHttp <a name="CustomHostnameOwnershipVerificationHttp" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttp.Initializer"></a>

```typescript
import { customHostname } from '@cdktn/provider-cloudflare'

const customHostnameOwnershipVerificationHttp: customHostname.CustomHostnameOwnershipVerificationHttp = { ... }
```


### CustomHostnameSsl <a name="CustomHostnameSsl" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl.Initializer"></a>

```typescript
import { customHostname } from '@cdktn/provider-cloudflare'

const customHostnameSsl: customHostname.CustomHostnameSsl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl.property.bundleMethod">bundleMethod</a></code> | <code>string</code> | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl.property.certificateAuthority">certificateAuthority</a></code> | <code>string</code> | The Certificate Authority that will issue the certificate Available values: "digicert", "google", "lets_encrypt", "ssl_com". |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl.property.cloudflareBranding">cloudflareBranding</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether or not to add Cloudflare Branding for the order. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl.property.customCertBundle">customCertBundle</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle">CustomHostnameSslCustomCertBundle</a>[]</code> | Array of custom certificate and key pairs (1 or 2 pairs allowed). |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl.property.customCertificate">customCertificate</a></code> | <code>string</code> | If a custom uploaded certificate is used. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl.property.customKey">customKey</a></code> | <code>string</code> | The key for a custom uploaded certificate. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl.property.method">method</a></code> | <code>string</code> | Domain control validation (DCV) method used for this hostname. Available values: "http", "txt", "email". |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a></code> | SSL specific settings. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl.property.type">type</a></code> | <code>string</code> | Level of validation to be used for this hostname. Domain validation (dv) must be used. Available values: "dv". |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl.property.wildcard">wildcard</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the certificate covers a wildcard. |

---

##### `bundleMethod`<sup>Optional</sup> <a name="bundleMethod" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl.property.bundleMethod"></a>

```typescript
public readonly bundleMethod: string;
```

- *Type:* string

A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores.

An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it.
Available values: "ubiquitous", "optimal", "force".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/custom_hostname#bundle_method CustomHostname#bundle_method}

---

##### `certificateAuthority`<sup>Optional</sup> <a name="certificateAuthority" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl.property.certificateAuthority"></a>

```typescript
public readonly certificateAuthority: string;
```

- *Type:* string

The Certificate Authority that will issue the certificate Available values: "digicert", "google", "lets_encrypt", "ssl_com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/custom_hostname#certificate_authority CustomHostname#certificate_authority}

---

##### `cloudflareBranding`<sup>Optional</sup> <a name="cloudflareBranding" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl.property.cloudflareBranding"></a>

```typescript
public readonly cloudflareBranding: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether or not to add Cloudflare Branding for the order.

This will add a subdomain of sni.cloudflaressl.com as the Common Name if set to true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/custom_hostname#cloudflare_branding CustomHostname#cloudflare_branding}

---

##### `customCertBundle`<sup>Optional</sup> <a name="customCertBundle" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl.property.customCertBundle"></a>

```typescript
public readonly customCertBundle: IResolvable | CustomHostnameSslCustomCertBundle[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle">CustomHostnameSslCustomCertBundle</a>[]

Array of custom certificate and key pairs (1 or 2 pairs allowed).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/custom_hostname#custom_cert_bundle CustomHostname#custom_cert_bundle}

---

##### `customCertificate`<sup>Optional</sup> <a name="customCertificate" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl.property.customCertificate"></a>

```typescript
public readonly customCertificate: string;
```

- *Type:* string

If a custom uploaded certificate is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/custom_hostname#custom_certificate CustomHostname#custom_certificate}

---

##### `customKey`<sup>Optional</sup> <a name="customKey" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl.property.customKey"></a>

```typescript
public readonly customKey: string;
```

- *Type:* string

The key for a custom uploaded certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/custom_hostname#custom_key CustomHostname#custom_key}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Domain control validation (DCV) method used for this hostname. Available values: "http", "txt", "email".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/custom_hostname#method CustomHostname#method}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl.property.settings"></a>

```typescript
public readonly settings: CustomHostnameSslSettings;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a>

SSL specific settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/custom_hostname#settings CustomHostname#settings}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Level of validation to be used for this hostname. Domain validation (dv) must be used. Available values: "dv".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/custom_hostname#type CustomHostname#type}

---

##### `wildcard`<sup>Optional</sup> <a name="wildcard" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl.property.wildcard"></a>

```typescript
public readonly wildcard: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the certificate covers a wildcard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/custom_hostname#wildcard CustomHostname#wildcard}

---

### CustomHostnameSslCustomCertBundle <a name="CustomHostnameSslCustomCertBundle" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle.Initializer"></a>

```typescript
import { customHostname } from '@cdktn/provider-cloudflare'

const customHostnameSslCustomCertBundle: customHostname.CustomHostnameSslCustomCertBundle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle.property.customCertificate">customCertificate</a></code> | <code>string</code> | If a custom uploaded certificate is used. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle.property.customKey">customKey</a></code> | <code>string</code> | The key for a custom uploaded certificate. |

---

##### `customCertificate`<sup>Required</sup> <a name="customCertificate" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle.property.customCertificate"></a>

```typescript
public readonly customCertificate: string;
```

- *Type:* string

If a custom uploaded certificate is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/custom_hostname#custom_certificate CustomHostname#custom_certificate}

---

##### `customKey`<sup>Required</sup> <a name="customKey" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle.property.customKey"></a>

```typescript
public readonly customKey: string;
```

- *Type:* string

The key for a custom uploaded certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/custom_hostname#custom_key CustomHostname#custom_key}

---

### CustomHostnameSslSettings <a name="CustomHostnameSslSettings" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettings.Initializer"></a>

```typescript
import { customHostname } from '@cdktn/provider-cloudflare'

const customHostnameSslSettings: customHostname.CustomHostnameSslSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.ciphers">ciphers</a></code> | <code>string[]</code> | An allowlist of ciphers for TLS termination. These ciphers must be in the BoringSSL format. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.earlyHints">earlyHints</a></code> | <code>string</code> | Whether or not Early Hints is enabled. Available values: "on", "off". |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.http2">http2</a></code> | <code>string</code> | Whether or not HTTP2 is enabled. Available values: "on", "off". |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.minTlsVersion">minTlsVersion</a></code> | <code>string</code> | The minimum TLS version supported. Available values: "1.0", "1.1", "1.2", "1.3". |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.tls13">tls13</a></code> | <code>string</code> | Whether or not TLS 1.3 is enabled. Available values: "on", "off". |

---

##### `ciphers`<sup>Optional</sup> <a name="ciphers" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.ciphers"></a>

```typescript
public readonly ciphers: string[];
```

- *Type:* string[]

An allowlist of ciphers for TLS termination. These ciphers must be in the BoringSSL format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/custom_hostname#ciphers CustomHostname#ciphers}

---

##### `earlyHints`<sup>Optional</sup> <a name="earlyHints" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.earlyHints"></a>

```typescript
public readonly earlyHints: string;
```

- *Type:* string

Whether or not Early Hints is enabled. Available values: "on", "off".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/custom_hostname#early_hints CustomHostname#early_hints}

---

##### `http2`<sup>Optional</sup> <a name="http2" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.http2"></a>

```typescript
public readonly http2: string;
```

- *Type:* string

Whether or not HTTP2 is enabled. Available values: "on", "off".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/custom_hostname#http2 CustomHostname#http2}

---

##### `minTlsVersion`<sup>Optional</sup> <a name="minTlsVersion" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.minTlsVersion"></a>

```typescript
public readonly minTlsVersion: string;
```

- *Type:* string

The minimum TLS version supported. Available values: "1.0", "1.1", "1.2", "1.3".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/custom_hostname#min_tls_version CustomHostname#min_tls_version}

---

##### `tls13`<sup>Optional</sup> <a name="tls13" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.tls13"></a>

```typescript
public readonly tls13: string;
```

- *Type:* string

Whether or not TLS 1.3 is enabled. Available values: "on", "off".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/custom_hostname#tls_1_3 CustomHostname#tls_1_3}

---

## Classes <a name="Classes" id="Classes"></a>

### CustomHostnameOwnershipVerificationHttpOutputReference <a name="CustomHostnameOwnershipVerificationHttpOutputReference" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.Initializer"></a>

```typescript
import { customHostname } from '@cdktn/provider-cloudflare'

new customHostname.CustomHostnameOwnershipVerificationHttpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.httpBody">httpBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.httpUrl">httpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttp">CustomHostnameOwnershipVerificationHttp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpBody`<sup>Required</sup> <a name="httpBody" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.httpBody"></a>

```typescript
public readonly httpBody: string;
```

- *Type:* string

---

##### `httpUrl`<sup>Required</sup> <a name="httpUrl" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.httpUrl"></a>

```typescript
public readonly httpUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomHostnameOwnershipVerificationHttp;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttp">CustomHostnameOwnershipVerificationHttp</a>

---


### CustomHostnameOwnershipVerificationOutputReference <a name="CustomHostnameOwnershipVerificationOutputReference" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.Initializer"></a>

```typescript
import { customHostname } from '@cdktn/provider-cloudflare'

new customHostname.CustomHostnameOwnershipVerificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerification">CustomHostnameOwnershipVerification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomHostnameOwnershipVerification;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameOwnershipVerification">CustomHostnameOwnershipVerification</a>

---


### CustomHostnameSslCustomCertBundleList <a name="CustomHostnameSslCustomCertBundleList" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.Initializer"></a>

```typescript
import { customHostname } from '@cdktn/provider-cloudflare'

new customHostname.CustomHostnameSslCustomCertBundleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.get"></a>

```typescript
public get(index: number): CustomHostnameSslCustomCertBundleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle">CustomHostnameSslCustomCertBundle</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomHostnameSslCustomCertBundle[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle">CustomHostnameSslCustomCertBundle</a>[]

---


### CustomHostnameSslCustomCertBundleOutputReference <a name="CustomHostnameSslCustomCertBundleOutputReference" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer"></a>

```typescript
import { customHostname } from '@cdktn/provider-cloudflare'

new customHostname.CustomHostnameSslCustomCertBundleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customCertificateInput">customCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customKeyInput">customKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customCertificate">customCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customKey">customKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle">CustomHostnameSslCustomCertBundle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customCertificateInput`<sup>Optional</sup> <a name="customCertificateInput" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customCertificateInput"></a>

```typescript
public readonly customCertificateInput: string;
```

- *Type:* string

---

##### `customKeyInput`<sup>Optional</sup> <a name="customKeyInput" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customKeyInput"></a>

```typescript
public readonly customKeyInput: string;
```

- *Type:* string

---

##### `customCertificate`<sup>Required</sup> <a name="customCertificate" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customCertificate"></a>

```typescript
public readonly customCertificate: string;
```

- *Type:* string

---

##### `customKey`<sup>Required</sup> <a name="customKey" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customKey"></a>

```typescript
public readonly customKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomHostnameSslCustomCertBundle;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle">CustomHostnameSslCustomCertBundle</a>

---


### CustomHostnameSslOutputReference <a name="CustomHostnameSslOutputReference" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer"></a>

```typescript
import { customHostname } from '@cdktn/provider-cloudflare'

new customHostname.CustomHostnameSslOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putCustomCertBundle">putCustomCertBundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetBundleMethod">resetBundleMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCertificateAuthority">resetCertificateAuthority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCloudflareBranding">resetCloudflareBranding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCustomCertBundle">resetCustomCertBundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCustomCertificate">resetCustomCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCustomKey">resetCustomKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetWildcard">resetWildcard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomCertBundle` <a name="putCustomCertBundle" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putCustomCertBundle"></a>

```typescript
public putCustomCertBundle(value: IResolvable | CustomHostnameSslCustomCertBundle[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putCustomCertBundle.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle">CustomHostnameSslCustomCertBundle</a>[]

---

##### `putSettings` <a name="putSettings" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putSettings"></a>

```typescript
public putSettings(value: CustomHostnameSslSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a>

---

##### `resetBundleMethod` <a name="resetBundleMethod" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetBundleMethod"></a>

```typescript
public resetBundleMethod(): void
```

##### `resetCertificateAuthority` <a name="resetCertificateAuthority" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCertificateAuthority"></a>

```typescript
public resetCertificateAuthority(): void
```

##### `resetCloudflareBranding` <a name="resetCloudflareBranding" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCloudflareBranding"></a>

```typescript
public resetCloudflareBranding(): void
```

##### `resetCustomCertBundle` <a name="resetCustomCertBundle" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCustomCertBundle"></a>

```typescript
public resetCustomCertBundle(): void
```

##### `resetCustomCertificate` <a name="resetCustomCertificate" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCustomCertificate"></a>

```typescript
public resetCustomCertificate(): void
```

##### `resetCustomKey` <a name="resetCustomKey" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCustomKey"></a>

```typescript
public resetCustomKey(): void
```

##### `resetMethod` <a name="resetMethod" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetWildcard` <a name="resetWildcard" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetWildcard"></a>

```typescript
public resetWildcard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertBundle">customCertBundle</a></code> | <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList">CustomHostnameSslCustomCertBundleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference">CustomHostnameSslSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.bundleMethodInput">bundleMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.certificateAuthorityInput">certificateAuthorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.cloudflareBrandingInput">cloudflareBrandingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertBundleInput">customCertBundleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle">CustomHostnameSslCustomCertBundle</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertificateInput">customCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customKeyInput">customKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.settingsInput">settingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.wildcardInput">wildcardInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.bundleMethod">bundleMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.certificateAuthority">certificateAuthority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.cloudflareBranding">cloudflareBranding</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertificate">customCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customKey">customKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.wildcard">wildcard</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customCertBundle`<sup>Required</sup> <a name="customCertBundle" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertBundle"></a>

```typescript
public readonly customCertBundle: CustomHostnameSslCustomCertBundleList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList">CustomHostnameSslCustomCertBundleList</a>

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.settings"></a>

```typescript
public readonly settings: CustomHostnameSslSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference">CustomHostnameSslSettingsOutputReference</a>

---

##### `bundleMethodInput`<sup>Optional</sup> <a name="bundleMethodInput" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.bundleMethodInput"></a>

```typescript
public readonly bundleMethodInput: string;
```

- *Type:* string

---

##### `certificateAuthorityInput`<sup>Optional</sup> <a name="certificateAuthorityInput" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.certificateAuthorityInput"></a>

```typescript
public readonly certificateAuthorityInput: string;
```

- *Type:* string

---

##### `cloudflareBrandingInput`<sup>Optional</sup> <a name="cloudflareBrandingInput" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.cloudflareBrandingInput"></a>

```typescript
public readonly cloudflareBrandingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `customCertBundleInput`<sup>Optional</sup> <a name="customCertBundleInput" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertBundleInput"></a>

```typescript
public readonly customCertBundleInput: IResolvable | CustomHostnameSslCustomCertBundle[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle">CustomHostnameSslCustomCertBundle</a>[]

---

##### `customCertificateInput`<sup>Optional</sup> <a name="customCertificateInput" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertificateInput"></a>

```typescript
public readonly customCertificateInput: string;
```

- *Type:* string

---

##### `customKeyInput`<sup>Optional</sup> <a name="customKeyInput" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customKeyInput"></a>

```typescript
public readonly customKeyInput: string;
```

- *Type:* string

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: IResolvable | CustomHostnameSslSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `wildcardInput`<sup>Optional</sup> <a name="wildcardInput" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.wildcardInput"></a>

```typescript
public readonly wildcardInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bundleMethod`<sup>Required</sup> <a name="bundleMethod" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.bundleMethod"></a>

```typescript
public readonly bundleMethod: string;
```

- *Type:* string

---

##### `certificateAuthority`<sup>Required</sup> <a name="certificateAuthority" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.certificateAuthority"></a>

```typescript
public readonly certificateAuthority: string;
```

- *Type:* string

---

##### `cloudflareBranding`<sup>Required</sup> <a name="cloudflareBranding" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.cloudflareBranding"></a>

```typescript
public readonly cloudflareBranding: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `customCertificate`<sup>Required</sup> <a name="customCertificate" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertificate"></a>

```typescript
public readonly customCertificate: string;
```

- *Type:* string

---

##### `customKey`<sup>Required</sup> <a name="customKey" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customKey"></a>

```typescript
public readonly customKey: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `wildcard`<sup>Required</sup> <a name="wildcard" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.wildcard"></a>

```typescript
public readonly wildcard: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomHostnameSsl;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a>

---


### CustomHostnameSslSettingsOutputReference <a name="CustomHostnameSslSettingsOutputReference" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer"></a>

```typescript
import { customHostname } from '@cdktn/provider-cloudflare'

new customHostname.CustomHostnameSslSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetCiphers">resetCiphers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetEarlyHints">resetEarlyHints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetHttp2">resetHttp2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetMinTlsVersion">resetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetTls13">resetTls13</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCiphers` <a name="resetCiphers" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetCiphers"></a>

```typescript
public resetCiphers(): void
```

##### `resetEarlyHints` <a name="resetEarlyHints" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetEarlyHints"></a>

```typescript
public resetEarlyHints(): void
```

##### `resetHttp2` <a name="resetHttp2" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetHttp2"></a>

```typescript
public resetHttp2(): void
```

##### `resetMinTlsVersion` <a name="resetMinTlsVersion" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetMinTlsVersion"></a>

```typescript
public resetMinTlsVersion(): void
```

##### `resetTls13` <a name="resetTls13" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetTls13"></a>

```typescript
public resetTls13(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.ciphersInput">ciphersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.earlyHintsInput">earlyHintsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.http2Input">http2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.minTlsVersionInput">minTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.tls13Input">tls13Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.ciphers">ciphers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.earlyHints">earlyHints</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.http2">http2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.minTlsVersion">minTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.tls13">tls13</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ciphersInput`<sup>Optional</sup> <a name="ciphersInput" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.ciphersInput"></a>

```typescript
public readonly ciphersInput: string[];
```

- *Type:* string[]

---

##### `earlyHintsInput`<sup>Optional</sup> <a name="earlyHintsInput" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.earlyHintsInput"></a>

```typescript
public readonly earlyHintsInput: string;
```

- *Type:* string

---

##### `http2Input`<sup>Optional</sup> <a name="http2Input" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.http2Input"></a>

```typescript
public readonly http2Input: string;
```

- *Type:* string

---

##### `minTlsVersionInput`<sup>Optional</sup> <a name="minTlsVersionInput" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.minTlsVersionInput"></a>

```typescript
public readonly minTlsVersionInput: string;
```

- *Type:* string

---

##### `tls13Input`<sup>Optional</sup> <a name="tls13Input" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.tls13Input"></a>

```typescript
public readonly tls13Input: string;
```

- *Type:* string

---

##### `ciphers`<sup>Required</sup> <a name="ciphers" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.ciphers"></a>

```typescript
public readonly ciphers: string[];
```

- *Type:* string[]

---

##### `earlyHints`<sup>Required</sup> <a name="earlyHints" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.earlyHints"></a>

```typescript
public readonly earlyHints: string;
```

- *Type:* string

---

##### `http2`<sup>Required</sup> <a name="http2" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.http2"></a>

```typescript
public readonly http2: string;
```

- *Type:* string

---

##### `minTlsVersion`<sup>Required</sup> <a name="minTlsVersion" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.minTlsVersion"></a>

```typescript
public readonly minTlsVersion: string;
```

- *Type:* string

---

##### `tls13`<sup>Required</sup> <a name="tls13" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.tls13"></a>

```typescript
public readonly tls13: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomHostnameSslSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a>

---



