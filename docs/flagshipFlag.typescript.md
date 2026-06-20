# `flagshipFlag` Submodule <a name="`flagshipFlag` Submodule" id="@cdktn/provider-cloudflare.flagshipFlag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FlagshipFlag <a name="FlagshipFlag" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag cloudflare_flagship_flag}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer"></a>

```typescript
import { flagshipFlag } from '@cdktn/provider-cloudflare'

new flagshipFlag.FlagshipFlag(scope: Construct, id: string, config: FlagshipFlagConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig">FlagshipFlagConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig">FlagshipFlagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetFlagKey">resetFlagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.putRules"></a>

```typescript
public putRules(value: IResolvable | FlagshipFlagRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFlagKey` <a name="resetFlagKey" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetFlagKey"></a>

```typescript
public resetFlagKey(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FlagshipFlag resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isConstruct"></a>

```typescript
import { flagshipFlag } from '@cdktn/provider-cloudflare'

flagshipFlag.FlagshipFlag.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isTerraformElement"></a>

```typescript
import { flagshipFlag } from '@cdktn/provider-cloudflare'

flagshipFlag.FlagshipFlag.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isTerraformResource"></a>

```typescript
import { flagshipFlag } from '@cdktn/provider-cloudflare'

flagshipFlag.FlagshipFlag.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.generateConfigForImport"></a>

```typescript
import { flagshipFlag } from '@cdktn/provider-cloudflare'

flagshipFlag.FlagshipFlag.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a FlagshipFlag resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FlagshipFlag to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FlagshipFlag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FlagshipFlag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList">FlagshipFlagRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.defaultVariationInput">defaultVariationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.flagKeyInput">flagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.rulesInput">rulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.variationsInput">variationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.defaultVariation">defaultVariation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.flagKey">flagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.variations">variations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.rules"></a>

```typescript
public readonly rules: FlagshipFlagRulesList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList">FlagshipFlagRulesList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `defaultVariationInput`<sup>Optional</sup> <a name="defaultVariationInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.defaultVariationInput"></a>

```typescript
public readonly defaultVariationInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `flagKeyInput`<sup>Optional</sup> <a name="flagKeyInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.flagKeyInput"></a>

```typescript
public readonly flagKeyInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | FlagshipFlagRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `variationsInput`<sup>Optional</sup> <a name="variationsInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.variationsInput"></a>

```typescript
public readonly variationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `defaultVariation`<sup>Required</sup> <a name="defaultVariation" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.defaultVariation"></a>

```typescript
public readonly defaultVariation: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `flagKey`<sup>Required</sup> <a name="flagKey" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.flagKey"></a>

```typescript
public readonly flagKey: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `variations`<sup>Required</sup> <a name="variations" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.variations"></a>

```typescript
public readonly variations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FlagshipFlagConfig <a name="FlagshipFlagConfig" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.Initializer"></a>

```typescript
import { flagshipFlag } from '@cdktn/provider-cloudflare'

const flagshipFlagConfig: flagshipFlag.FlagshipFlagConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.accountId">accountId</a></code> | <code>string</code> | Cloudflare account ID. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.appId">appId</a></code> | <code>string</code> | App identifier. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.defaultVariation">defaultVariation</a></code> | <code>string</code> | Variation served when no rule matches or the flag is disabled. Must be a key in `variations`. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | When false, the flag bypasses all rules and always serves `default_variation`. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.key">key</a></code> | <code>string</code> | Unique identifier for the flag within an app. Used in all evaluation and SDK calls. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.rules">rules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>[]</code> | Targeting rules evaluated in ascending `priority`; |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.variations">variations</a></code> | <code>{[ key: string ]: string}</code> | Map of variation name to value. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#description FlagshipFlag#description}. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.flagKey">flagKey</a></code> | <code>string</code> | Flag key (slug). |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.type">type</a></code> | <code>string</code> | Value type of the flag's variations. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#account_id FlagshipFlag#account_id}

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

App identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#app_id FlagshipFlag#app_id}

---

##### `defaultVariation`<sup>Required</sup> <a name="defaultVariation" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.defaultVariation"></a>

```typescript
public readonly defaultVariation: string;
```

- *Type:* string

Variation served when no rule matches or the flag is disabled. Must be a key in `variations`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#default_variation FlagshipFlag#default_variation}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When false, the flag bypasses all rules and always serves `default_variation`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#enabled FlagshipFlag#enabled}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Unique identifier for the flag within an app. Used in all evaluation and SDK calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#key FlagshipFlag#key}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.rules"></a>

```typescript
public readonly rules: IResolvable | FlagshipFlagRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>[]

Targeting rules evaluated in ascending `priority`;

the first matching rule wins. An empty array means the flag always serves `default_variation`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#rules FlagshipFlag#rules}

---

##### `variations`<sup>Required</sup> <a name="variations" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.variations"></a>

```typescript
public readonly variations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of variation name to value.

All values must be the same type (boolean, string, number, or JSON object/array). Each serialized value must be 10KB or smaller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#variations FlagshipFlag#variations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#description FlagshipFlag#description}.

---

##### `flagKey`<sup>Optional</sup> <a name="flagKey" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.flagKey"></a>

```typescript
public readonly flagKey: string;
```

- *Type:* string

Flag key (slug).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#flag_key FlagshipFlag#flag_key}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Value type of the flag's variations.

Inferred from the variation values on write, so it may be omitted in requests.
Available values: "boolean", "string", "number", "json".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#type FlagshipFlag#type}

---

### FlagshipFlagRules <a name="FlagshipFlagRules" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.Initializer"></a>

```typescript
import { flagshipFlag } from '@cdktn/provider-cloudflare'

const flagshipFlagRules: flagshipFlag.FlagshipFlagRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>[]</code> | Conditions the context must satisfy for this rule to match. An empty array matches all contexts. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.priority">priority</a></code> | <code>number</code> | Evaluation order; lower numbers are evaluated first. Must be unique across the flag's rules. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.serveVariation">serveVariation</a></code> | <code>string</code> | Variation served when this rule matches. Must be a key in `variations`. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.rollout">rollout</a></code> | <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout">FlagshipFlagRulesRollout</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#rollout FlagshipFlag#rollout}. |

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | FlagshipFlagRulesConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>[]

Conditions the context must satisfy for this rule to match. An empty array matches all contexts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#conditions FlagshipFlag#conditions}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Evaluation order; lower numbers are evaluated first. Must be unique across the flag's rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#priority FlagshipFlag#priority}

---

##### `serveVariation`<sup>Required</sup> <a name="serveVariation" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.serveVariation"></a>

```typescript
public readonly serveVariation: string;
```

- *Type:* string

Variation served when this rule matches. Must be a key in `variations`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#serve_variation FlagshipFlag#serve_variation}

---

##### `rollout`<sup>Optional</sup> <a name="rollout" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.rollout"></a>

```typescript
public readonly rollout: FlagshipFlagRulesRollout;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout">FlagshipFlagRulesRollout</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#rollout FlagshipFlag#rollout}.

---

### FlagshipFlagRulesConditions <a name="FlagshipFlagRulesConditions" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.Initializer"></a>

```typescript
import { flagshipFlag } from '@cdktn/provider-cloudflare'

const flagshipFlagRulesConditions: flagshipFlag.FlagshipFlagRulesConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.attribute">attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#attribute FlagshipFlag#attribute}. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.clauses">clauses</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#clauses FlagshipFlag#clauses}. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.logicalOperator">logicalOperator</a></code> | <code>string</code> | Available values: "AND", "OR". |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.operator">operator</a></code> | <code>string</code> | Available values: "equals", "not_equals", "greater_than", "less_than", "greater_than_or_equals", "less_than_or_equals", "contains", "starts_with", "ends_with", "in", "not_in". |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.value">value</a></code> | <code>string</code> | Value to compare against the context attribute. |

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#attribute FlagshipFlag#attribute}.

---

##### `clauses`<sup>Optional</sup> <a name="clauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.clauses"></a>

```typescript
public readonly clauses: IResolvable | FlagshipFlagRulesConditionsClauses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#clauses FlagshipFlag#clauses}.

---

##### `logicalOperator`<sup>Optional</sup> <a name="logicalOperator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.logicalOperator"></a>

```typescript
public readonly logicalOperator: string;
```

- *Type:* string

Available values: "AND", "OR".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#logical_operator FlagshipFlag#logical_operator}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Available values: "equals", "not_equals", "greater_than", "less_than", "greater_than_or_equals", "less_than_or_equals", "contains", "starts_with", "ends_with", "in", "not_in".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#operator FlagshipFlag#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value to compare against the context attribute.

Must be an array for `in` and `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering operators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#value FlagshipFlag#value}

---

### FlagshipFlagRulesConditionsClauses <a name="FlagshipFlagRulesConditionsClauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.Initializer"></a>

```typescript
import { flagshipFlag } from '@cdktn/provider-cloudflare'

const flagshipFlagRulesConditionsClauses: flagshipFlag.FlagshipFlagRulesConditionsClauses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.attribute">attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#attribute FlagshipFlag#attribute}. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.clauses">clauses</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#clauses FlagshipFlag#clauses}. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.logicalOperator">logicalOperator</a></code> | <code>string</code> | Available values: "AND", "OR". |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.operator">operator</a></code> | <code>string</code> | Available values: "equals", "not_equals", "greater_than", "less_than", "greater_than_or_equals", "less_than_or_equals", "contains", "starts_with", "ends_with", "in", "not_in". |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.value">value</a></code> | <code>string</code> | Value to compare against the context attribute. |

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#attribute FlagshipFlag#attribute}.

---

##### `clauses`<sup>Optional</sup> <a name="clauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.clauses"></a>

```typescript
public readonly clauses: IResolvable | FlagshipFlagRulesConditionsClauses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#clauses FlagshipFlag#clauses}.

---

##### `logicalOperator`<sup>Optional</sup> <a name="logicalOperator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.logicalOperator"></a>

```typescript
public readonly logicalOperator: string;
```

- *Type:* string

Available values: "AND", "OR".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#logical_operator FlagshipFlag#logical_operator}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Available values: "equals", "not_equals", "greater_than", "less_than", "greater_than_or_equals", "less_than_or_equals", "contains", "starts_with", "ends_with", "in", "not_in".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#operator FlagshipFlag#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value to compare against the context attribute.

Must be an array for `in` and `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering operators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#value FlagshipFlag#value}

---

### FlagshipFlagRulesRollout <a name="FlagshipFlagRulesRollout" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout.Initializer"></a>

```typescript
import { flagshipFlag } from '@cdktn/provider-cloudflare'

const flagshipFlagRulesRollout: flagshipFlag.FlagshipFlagRulesRollout = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout.property.percentage">percentage</a></code> | <code>number</code> | Percentage of matching traffic (0–100) served this variation. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout.property.attribute">attribute</a></code> | <code>string</code> | Context attribute used for sticky bucketing. Defaults to `targetingKey`. If absent at evaluation time, bucketing is random per request. |

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

Percentage of matching traffic (0–100) served this variation.

For multi-way splits, use cumulative upper bounds across rules (e.g. 30, 70, 100).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#percentage FlagshipFlag#percentage}

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

Context attribute used for sticky bucketing. Defaults to `targetingKey`. If absent at evaluation time, bucketing is random per request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#attribute FlagshipFlag#attribute}

---

## Classes <a name="Classes" id="Classes"></a>

### FlagshipFlagRulesConditionsClausesList <a name="FlagshipFlagRulesConditionsClausesList" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.Initializer"></a>

```typescript
import { flagshipFlag } from '@cdktn/provider-cloudflare'

new flagshipFlag.FlagshipFlagRulesConditionsClausesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.get"></a>

```typescript
public get(index: number): FlagshipFlagRulesConditionsClausesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FlagshipFlagRulesConditionsClauses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>[]

---


### FlagshipFlagRulesConditionsClausesOutputReference <a name="FlagshipFlagRulesConditionsClausesOutputReference" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer"></a>

```typescript
import { flagshipFlag } from '@cdktn/provider-cloudflare'

new flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.putClauses">putClauses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetClauses">resetClauses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetLogicalOperator">resetLogicalOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClauses` <a name="putClauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.putClauses"></a>

```typescript
public putClauses(value: IResolvable | FlagshipFlagRulesConditionsClauses[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.putClauses.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>[]

---

##### `resetAttribute` <a name="resetAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetAttribute"></a>

```typescript
public resetAttribute(): void
```

##### `resetClauses` <a name="resetClauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetClauses"></a>

```typescript
public resetClauses(): void
```

##### `resetLogicalOperator` <a name="resetLogicalOperator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetLogicalOperator"></a>

```typescript
public resetLogicalOperator(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.clauses">clauses</a></code> | <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList">FlagshipFlagRulesConditionsClausesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.attributeInput">attributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.clausesInput">clausesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.logicalOperatorInput">logicalOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.logicalOperator">logicalOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clauses`<sup>Required</sup> <a name="clauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.clauses"></a>

```typescript
public readonly clauses: FlagshipFlagRulesConditionsClausesList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList">FlagshipFlagRulesConditionsClausesList</a>

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: string;
```

- *Type:* string

---

##### `clausesInput`<sup>Optional</sup> <a name="clausesInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.clausesInput"></a>

```typescript
public readonly clausesInput: IResolvable | FlagshipFlagRulesConditionsClauses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>[]

---

##### `logicalOperatorInput`<sup>Optional</sup> <a name="logicalOperatorInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.logicalOperatorInput"></a>

```typescript
public readonly logicalOperatorInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `logicalOperator`<sup>Required</sup> <a name="logicalOperator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.logicalOperator"></a>

```typescript
public readonly logicalOperator: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FlagshipFlagRulesConditionsClauses;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>

---


### FlagshipFlagRulesConditionsList <a name="FlagshipFlagRulesConditionsList" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.Initializer"></a>

```typescript
import { flagshipFlag } from '@cdktn/provider-cloudflare'

new flagshipFlag.FlagshipFlagRulesConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.get"></a>

```typescript
public get(index: number): FlagshipFlagRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FlagshipFlagRulesConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>[]

---


### FlagshipFlagRulesConditionsOutputReference <a name="FlagshipFlagRulesConditionsOutputReference" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer"></a>

```typescript
import { flagshipFlag } from '@cdktn/provider-cloudflare'

new flagshipFlag.FlagshipFlagRulesConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.putClauses">putClauses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetClauses">resetClauses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetLogicalOperator">resetLogicalOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClauses` <a name="putClauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.putClauses"></a>

```typescript
public putClauses(value: IResolvable | FlagshipFlagRulesConditionsClauses[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.putClauses.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>[]

---

##### `resetAttribute` <a name="resetAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetAttribute"></a>

```typescript
public resetAttribute(): void
```

##### `resetClauses` <a name="resetClauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetClauses"></a>

```typescript
public resetClauses(): void
```

##### `resetLogicalOperator` <a name="resetLogicalOperator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetLogicalOperator"></a>

```typescript
public resetLogicalOperator(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.clauses">clauses</a></code> | <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList">FlagshipFlagRulesConditionsClausesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.attributeInput">attributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.clausesInput">clausesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.logicalOperatorInput">logicalOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.logicalOperator">logicalOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clauses`<sup>Required</sup> <a name="clauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.clauses"></a>

```typescript
public readonly clauses: FlagshipFlagRulesConditionsClausesList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList">FlagshipFlagRulesConditionsClausesList</a>

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: string;
```

- *Type:* string

---

##### `clausesInput`<sup>Optional</sup> <a name="clausesInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.clausesInput"></a>

```typescript
public readonly clausesInput: IResolvable | FlagshipFlagRulesConditionsClauses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>[]

---

##### `logicalOperatorInput`<sup>Optional</sup> <a name="logicalOperatorInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.logicalOperatorInput"></a>

```typescript
public readonly logicalOperatorInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `logicalOperator`<sup>Required</sup> <a name="logicalOperator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.logicalOperator"></a>

```typescript
public readonly logicalOperator: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FlagshipFlagRulesConditions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>

---


### FlagshipFlagRulesList <a name="FlagshipFlagRulesList" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.Initializer"></a>

```typescript
import { flagshipFlag } from '@cdktn/provider-cloudflare'

new flagshipFlag.FlagshipFlagRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.get"></a>

```typescript
public get(index: number): FlagshipFlagRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FlagshipFlagRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>[]

---


### FlagshipFlagRulesOutputReference <a name="FlagshipFlagRulesOutputReference" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer"></a>

```typescript
import { flagshipFlag } from '@cdktn/provider-cloudflare'

new flagshipFlag.FlagshipFlagRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.putRollout">putRollout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.resetRollout">resetRollout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditions` <a name="putConditions" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.putConditions"></a>

```typescript
public putConditions(value: IResolvable | FlagshipFlagRulesConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>[]

---

##### `putRollout` <a name="putRollout" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.putRollout"></a>

```typescript
public putRollout(value: FlagshipFlagRulesRollout): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.putRollout.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout">FlagshipFlagRulesRollout</a>

---

##### `resetRollout` <a name="resetRollout" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.resetRollout"></a>

```typescript
public resetRollout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList">FlagshipFlagRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.rollout">rollout</a></code> | <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference">FlagshipFlagRulesRolloutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.rolloutInput">rolloutInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout">FlagshipFlagRulesRollout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.serveVariationInput">serveVariationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.serveVariation">serveVariation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.conditions"></a>

```typescript
public readonly conditions: FlagshipFlagRulesConditionsList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList">FlagshipFlagRulesConditionsList</a>

---

##### `rollout`<sup>Required</sup> <a name="rollout" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.rollout"></a>

```typescript
public readonly rollout: FlagshipFlagRulesRolloutOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference">FlagshipFlagRulesRolloutOutputReference</a>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | FlagshipFlagRulesConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>[]

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `rolloutInput`<sup>Optional</sup> <a name="rolloutInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.rolloutInput"></a>

```typescript
public readonly rolloutInput: IResolvable | FlagshipFlagRulesRollout;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout">FlagshipFlagRulesRollout</a>

---

##### `serveVariationInput`<sup>Optional</sup> <a name="serveVariationInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.serveVariationInput"></a>

```typescript
public readonly serveVariationInput: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `serveVariation`<sup>Required</sup> <a name="serveVariation" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.serveVariation"></a>

```typescript
public readonly serveVariation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FlagshipFlagRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>

---


### FlagshipFlagRulesRolloutOutputReference <a name="FlagshipFlagRulesRolloutOutputReference" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.Initializer"></a>

```typescript
import { flagshipFlag } from '@cdktn/provider-cloudflare'

new flagshipFlag.FlagshipFlagRulesRolloutOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttribute` <a name="resetAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.resetAttribute"></a>

```typescript
public resetAttribute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.attributeInput">attributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.percentageInput">percentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.percentage">percentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout">FlagshipFlagRulesRollout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: string;
```

- *Type:* string

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.percentageInput"></a>

```typescript
public readonly percentageInput: number;
```

- *Type:* number

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FlagshipFlagRulesRollout;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout">FlagshipFlagRulesRollout</a>

---



