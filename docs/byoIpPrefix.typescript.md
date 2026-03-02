# `byoIpPrefix` Submodule <a name="`byoIpPrefix` Submodule" id="@cdktn/provider-cloudflare.byoIpPrefix"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ByoIpPrefix <a name="ByoIpPrefix" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/byo_ip_prefix cloudflare_byo_ip_prefix}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.Initializer"></a>

```typescript
import { byoIpPrefix } from '@cdktn/provider-cloudflare'

new byoIpPrefix.ByoIpPrefix(scope: Construct, id: string, config: ByoIpPrefixConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig">ByoIpPrefixConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig">ByoIpPrefixConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.resetDelegateLoaCreation">resetDelegateLoaCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.resetLoaDocumentId">resetLoaDocumentId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDelegateLoaCreation` <a name="resetDelegateLoaCreation" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.resetDelegateLoaCreation"></a>

```typescript
public resetDelegateLoaCreation(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLoaDocumentId` <a name="resetLoaDocumentId" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.resetLoaDocumentId"></a>

```typescript
public resetLoaDocumentId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ByoIpPrefix resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.isConstruct"></a>

```typescript
import { byoIpPrefix } from '@cdktn/provider-cloudflare'

byoIpPrefix.ByoIpPrefix.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.isTerraformElement"></a>

```typescript
import { byoIpPrefix } from '@cdktn/provider-cloudflare'

byoIpPrefix.ByoIpPrefix.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.isTerraformResource"></a>

```typescript
import { byoIpPrefix } from '@cdktn/provider-cloudflare'

byoIpPrefix.ByoIpPrefix.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.generateConfigForImport"></a>

```typescript
import { byoIpPrefix } from '@cdktn/provider-cloudflare'

byoIpPrefix.ByoIpPrefix.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ByoIpPrefix resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ByoIpPrefix to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ByoIpPrefix that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/byo_ip_prefix#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ByoIpPrefix to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.advertised">advertised</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.advertisedModifiedAt">advertisedModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.approved">approved</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.irrValidationState">irrValidationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.onDemandEnabled">onDemandEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.onDemandLocked">onDemandLocked</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.ownershipValidationState">ownershipValidationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.ownershipValidationToken">ownershipValidationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.rpkiValidationState">rpkiValidationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.asnInput">asnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.delegateLoaCreationInput">delegateLoaCreationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.loaDocumentIdInput">loaDocumentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.asn">asn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.delegateLoaCreation">delegateLoaCreation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.loaDocumentId">loaDocumentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `advertised`<sup>Required</sup> <a name="advertised" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.advertised"></a>

```typescript
public readonly advertised: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `advertisedModifiedAt`<sup>Required</sup> <a name="advertisedModifiedAt" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.advertisedModifiedAt"></a>

```typescript
public readonly advertisedModifiedAt: string;
```

- *Type:* string

---

##### `approved`<sup>Required</sup> <a name="approved" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.approved"></a>

```typescript
public readonly approved: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `irrValidationState`<sup>Required</sup> <a name="irrValidationState" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.irrValidationState"></a>

```typescript
public readonly irrValidationState: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `onDemandEnabled`<sup>Required</sup> <a name="onDemandEnabled" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.onDemandEnabled"></a>

```typescript
public readonly onDemandEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `onDemandLocked`<sup>Required</sup> <a name="onDemandLocked" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.onDemandLocked"></a>

```typescript
public readonly onDemandLocked: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `ownershipValidationState`<sup>Required</sup> <a name="ownershipValidationState" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.ownershipValidationState"></a>

```typescript
public readonly ownershipValidationState: string;
```

- *Type:* string

---

##### `ownershipValidationToken`<sup>Required</sup> <a name="ownershipValidationToken" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.ownershipValidationToken"></a>

```typescript
public readonly ownershipValidationToken: string;
```

- *Type:* string

---

##### `rpkiValidationState`<sup>Required</sup> <a name="rpkiValidationState" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.rpkiValidationState"></a>

```typescript
public readonly rpkiValidationState: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `asnInput`<sup>Optional</sup> <a name="asnInput" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.asnInput"></a>

```typescript
public readonly asnInput: number;
```

- *Type:* number

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `delegateLoaCreationInput`<sup>Optional</sup> <a name="delegateLoaCreationInput" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.delegateLoaCreationInput"></a>

```typescript
public readonly delegateLoaCreationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `loaDocumentIdInput`<sup>Optional</sup> <a name="loaDocumentIdInput" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.loaDocumentIdInput"></a>

```typescript
public readonly loaDocumentIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.asn"></a>

```typescript
public readonly asn: number;
```

- *Type:* number

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `delegateLoaCreation`<sup>Required</sup> <a name="delegateLoaCreation" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.delegateLoaCreation"></a>

```typescript
public readonly delegateLoaCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `loaDocumentId`<sup>Required</sup> <a name="loaDocumentId" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.loaDocumentId"></a>

```typescript
public readonly loaDocumentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefix.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ByoIpPrefixConfig <a name="ByoIpPrefixConfig" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.Initializer"></a>

```typescript
import { byoIpPrefix } from '@cdktn/provider-cloudflare'

const byoIpPrefixConfig: byoIpPrefix.ByoIpPrefixConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier of a Cloudflare account. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.asn">asn</a></code> | <code>number</code> | Autonomous System Number (ASN) the prefix will be advertised under. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.cidr">cidr</a></code> | <code>string</code> | IP Prefix in Classless Inter-Domain Routing format. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.delegateLoaCreation">delegateLoaCreation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Cloudflare is allowed to generate the LOA document on behalf of the prefix owner. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.description">description</a></code> | <code>string</code> | Description of the prefix. |
| <code><a href="#@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.loaDocumentId">loaDocumentId</a></code> | <code>string</code> | Identifier for the uploaded LOA document. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier of a Cloudflare account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/byo_ip_prefix#account_id ByoIpPrefix#account_id}

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.asn"></a>

```typescript
public readonly asn: number;
```

- *Type:* number

Autonomous System Number (ASN) the prefix will be advertised under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/byo_ip_prefix#asn ByoIpPrefix#asn}

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

IP Prefix in Classless Inter-Domain Routing format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/byo_ip_prefix#cidr ByoIpPrefix#cidr}

---

##### `delegateLoaCreation`<sup>Optional</sup> <a name="delegateLoaCreation" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.delegateLoaCreation"></a>

```typescript
public readonly delegateLoaCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Cloudflare is allowed to generate the LOA document on behalf of the prefix owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/byo_ip_prefix#delegate_loa_creation ByoIpPrefix#delegate_loa_creation}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/byo_ip_prefix#description ByoIpPrefix#description}

---

##### `loaDocumentId`<sup>Optional</sup> <a name="loaDocumentId" id="@cdktn/provider-cloudflare.byoIpPrefix.ByoIpPrefixConfig.property.loaDocumentId"></a>

```typescript
public readonly loaDocumentId: string;
```

- *Type:* string

Identifier for the uploaded LOA document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/byo_ip_prefix#loa_document_id ByoIpPrefix#loa_document_id}

---



