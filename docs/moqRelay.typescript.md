# `moqRelay` Submodule <a name="`moqRelay` Submodule" id="@cdktn/provider-cloudflare.moqRelay"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MoqRelay <a name="MoqRelay" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay cloudflare_moq_relay}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer"></a>

```typescript
import { moqRelay } from '@cdktn/provider-cloudflare'

new moqRelay.MoqRelay(scope: Construct, id: string, config: MoqRelayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig">MoqRelayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig">MoqRelayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.resetConfig">resetConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.putConfig"></a>

```typescript
public putConfig(value: MoqRelayConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.resetConfig"></a>

```typescript
public resetConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MoqRelay resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.isConstruct"></a>

```typescript
import { moqRelay } from '@cdktn/provider-cloudflare'

moqRelay.MoqRelay.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.isTerraformElement"></a>

```typescript
import { moqRelay } from '@cdktn/provider-cloudflare'

moqRelay.MoqRelay.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.isTerraformResource"></a>

```typescript
import { moqRelay } from '@cdktn/provider-cloudflare'

moqRelay.MoqRelay.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.generateConfigForImport"></a>

```typescript
import { moqRelay } from '@cdktn/provider-cloudflare'

moqRelay.MoqRelay.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MoqRelay resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MoqRelay to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MoqRelay that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MoqRelay to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference">MoqRelayConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.modified">modified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.tokenPublishSubscribe">tokenPublishSubscribe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.tokenSubscribe">tokenSubscribe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.configInput">configInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.config"></a>

```typescript
public readonly config: MoqRelayConfigAOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference">MoqRelayConfigAOutputReference</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.modified"></a>

```typescript
public readonly modified: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tokenPublishSubscribe`<sup>Required</sup> <a name="tokenPublishSubscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.tokenPublishSubscribe"></a>

```typescript
public readonly tokenPublishSubscribe: string;
```

- *Type:* string

---

##### `tokenSubscribe`<sup>Required</sup> <a name="tokenSubscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.tokenSubscribe"></a>

```typescript
public readonly tokenSubscribe: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.configInput"></a>

```typescript
public readonly configInput: IResolvable | MoqRelayConfigA;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MoqRelayConfig <a name="MoqRelayConfig" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.Initializer"></a>

```typescript
import { moqRelay } from '@cdktn/provider-cloudflare'

const moqRelayConfig: moqRelay.MoqRelayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.accountId">accountId</a></code> | <code>string</code> | Cloudflare account identifier. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.name">name</a></code> | <code>string</code> | Human-readable name for the relay. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a></code> | upstreams and lingering_subscribe are mutually exclusive. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Cloudflare account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#account_id MoqRelay#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Human-readable name for the relay.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#name MoqRelay#name}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.config"></a>

```typescript
public readonly config: MoqRelayConfigA;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a>

upstreams and lingering_subscribe are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#config MoqRelay#config}

---

### MoqRelayConfigA <a name="MoqRelayConfigA" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA.Initializer"></a>

```typescript
import { moqRelay } from '@cdktn/provider-cloudflare'

const moqRelayConfigA: moqRelay.MoqRelayConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA.property.lingeringSubscribe">lingeringSubscribe</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe">MoqRelayConfigLingeringSubscribe</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#lingering_subscribe MoqRelay#lingering_subscribe}. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA.property.upstreams">upstreams</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams">MoqRelayConfigUpstreams</a></code> | Upstreams are external MOQT server publishers that a relay falls back to when it has no local publisher for a requested namespace/track. |

---

##### `lingeringSubscribe`<sup>Optional</sup> <a name="lingeringSubscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA.property.lingeringSubscribe"></a>

```typescript
public readonly lingeringSubscribe: MoqRelayConfigLingeringSubscribe;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe">MoqRelayConfigLingeringSubscribe</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#lingering_subscribe MoqRelay#lingering_subscribe}.

---

##### `upstreams`<sup>Optional</sup> <a name="upstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA.property.upstreams"></a>

```typescript
public readonly upstreams: MoqRelayConfigUpstreams;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams">MoqRelayConfigUpstreams</a>

Upstreams are external MOQT server publishers that a relay falls back to when it has no local publisher for a requested namespace/track.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#upstreams MoqRelay#upstreams}

---

### MoqRelayConfigLingeringSubscribe <a name="MoqRelayConfigLingeringSubscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe.Initializer"></a>

```typescript
import { moqRelay } from '@cdktn/provider-cloudflare'

const moqRelayConfigLingeringSubscribe: moqRelay.MoqRelayConfigLingeringSubscribe = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#enabled MoqRelay#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe.property.maxTimeoutMs">maxTimeoutMs</a></code> | <code>number</code> | Relay-level ceiling on lingering subscribe timeout (ms). Default 30000. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#enabled MoqRelay#enabled}.

---

##### `maxTimeoutMs`<sup>Optional</sup> <a name="maxTimeoutMs" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe.property.maxTimeoutMs"></a>

```typescript
public readonly maxTimeoutMs: number;
```

- *Type:* number

Relay-level ceiling on lingering subscribe timeout (ms). Default 30000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#max_timeout_ms MoqRelay#max_timeout_ms}

---

### MoqRelayConfigUpstreams <a name="MoqRelayConfigUpstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams.Initializer"></a>

```typescript
import { moqRelay } from '@cdktn/provider-cloudflare'

const moqRelayConfigUpstreams: moqRelay.MoqRelayConfigUpstreams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#enabled MoqRelay#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams.property.upstreams">upstreams</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>[]</code> | Ordered list of upstream MOQT server publishers. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#enabled MoqRelay#enabled}.

---

##### `upstreams`<sup>Optional</sup> <a name="upstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams.property.upstreams"></a>

```typescript
public readonly upstreams: IResolvable | MoqRelayConfigUpstreamsUpstreams[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>[]

Ordered list of upstream MOQT server publishers.

Each entry is an
object (not a bare string) so per-upstream configuration can be
added in the future without another breaking change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#upstreams MoqRelay#upstreams}

---

### MoqRelayConfigUpstreamsUpstreams <a name="MoqRelayConfigUpstreamsUpstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams.Initializer"></a>

```typescript
import { moqRelay } from '@cdktn/provider-cloudflare'

const moqRelayConfigUpstreamsUpstreams: moqRelay.MoqRelayConfigUpstreamsUpstreams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams.property.url">url</a></code> | <code>string</code> | Upstream MOQT server publisher URL. |

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Upstream MOQT server publisher URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#url MoqRelay#url}

---

## Classes <a name="Classes" id="Classes"></a>

### MoqRelayConfigAOutputReference <a name="MoqRelayConfigAOutputReference" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.Initializer"></a>

```typescript
import { moqRelay } from '@cdktn/provider-cloudflare'

new moqRelay.MoqRelayConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.putLingeringSubscribe">putLingeringSubscribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.putUpstreams">putUpstreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.resetLingeringSubscribe">resetLingeringSubscribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.resetUpstreams">resetUpstreams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLingeringSubscribe` <a name="putLingeringSubscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.putLingeringSubscribe"></a>

```typescript
public putLingeringSubscribe(value: MoqRelayConfigLingeringSubscribe): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.putLingeringSubscribe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe">MoqRelayConfigLingeringSubscribe</a>

---

##### `putUpstreams` <a name="putUpstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.putUpstreams"></a>

```typescript
public putUpstreams(value: MoqRelayConfigUpstreams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.putUpstreams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams">MoqRelayConfigUpstreams</a>

---

##### `resetLingeringSubscribe` <a name="resetLingeringSubscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.resetLingeringSubscribe"></a>

```typescript
public resetLingeringSubscribe(): void
```

##### `resetUpstreams` <a name="resetUpstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.resetUpstreams"></a>

```typescript
public resetUpstreams(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.lingeringSubscribe">lingeringSubscribe</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference">MoqRelayConfigLingeringSubscribeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.upstreams">upstreams</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference">MoqRelayConfigUpstreamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.lingeringSubscribeInput">lingeringSubscribeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe">MoqRelayConfigLingeringSubscribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.upstreamsInput">upstreamsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams">MoqRelayConfigUpstreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lingeringSubscribe`<sup>Required</sup> <a name="lingeringSubscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.lingeringSubscribe"></a>

```typescript
public readonly lingeringSubscribe: MoqRelayConfigLingeringSubscribeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference">MoqRelayConfigLingeringSubscribeOutputReference</a>

---

##### `upstreams`<sup>Required</sup> <a name="upstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.upstreams"></a>

```typescript
public readonly upstreams: MoqRelayConfigUpstreamsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference">MoqRelayConfigUpstreamsOutputReference</a>

---

##### `lingeringSubscribeInput`<sup>Optional</sup> <a name="lingeringSubscribeInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.lingeringSubscribeInput"></a>

```typescript
public readonly lingeringSubscribeInput: IResolvable | MoqRelayConfigLingeringSubscribe;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe">MoqRelayConfigLingeringSubscribe</a>

---

##### `upstreamsInput`<sup>Optional</sup> <a name="upstreamsInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.upstreamsInput"></a>

```typescript
public readonly upstreamsInput: IResolvable | MoqRelayConfigUpstreams;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams">MoqRelayConfigUpstreams</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MoqRelayConfigA;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a>

---


### MoqRelayConfigLingeringSubscribeOutputReference <a name="MoqRelayConfigLingeringSubscribeOutputReference" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.Initializer"></a>

```typescript
import { moqRelay } from '@cdktn/provider-cloudflare'

new moqRelay.MoqRelayConfigLingeringSubscribeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.resetMaxTimeoutMs">resetMaxTimeoutMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetMaxTimeoutMs` <a name="resetMaxTimeoutMs" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.resetMaxTimeoutMs"></a>

```typescript
public resetMaxTimeoutMs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.maxTimeoutMsInput">maxTimeoutMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.maxTimeoutMs">maxTimeoutMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe">MoqRelayConfigLingeringSubscribe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxTimeoutMsInput`<sup>Optional</sup> <a name="maxTimeoutMsInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.maxTimeoutMsInput"></a>

```typescript
public readonly maxTimeoutMsInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxTimeoutMs`<sup>Required</sup> <a name="maxTimeoutMs" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.maxTimeoutMs"></a>

```typescript
public readonly maxTimeoutMs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MoqRelayConfigLingeringSubscribe;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe">MoqRelayConfigLingeringSubscribe</a>

---


### MoqRelayConfigUpstreamsOutputReference <a name="MoqRelayConfigUpstreamsOutputReference" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.Initializer"></a>

```typescript
import { moqRelay } from '@cdktn/provider-cloudflare'

new moqRelay.MoqRelayConfigUpstreamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.putUpstreams">putUpstreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.resetUpstreams">resetUpstreams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUpstreams` <a name="putUpstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.putUpstreams"></a>

```typescript
public putUpstreams(value: IResolvable | MoqRelayConfigUpstreamsUpstreams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.putUpstreams.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>[]

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetUpstreams` <a name="resetUpstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.resetUpstreams"></a>

```typescript
public resetUpstreams(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.upstreams">upstreams</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList">MoqRelayConfigUpstreamsUpstreamsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.upstreamsInput">upstreamsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams">MoqRelayConfigUpstreams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `upstreams`<sup>Required</sup> <a name="upstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.upstreams"></a>

```typescript
public readonly upstreams: MoqRelayConfigUpstreamsUpstreamsList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList">MoqRelayConfigUpstreamsUpstreamsList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `upstreamsInput`<sup>Optional</sup> <a name="upstreamsInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.upstreamsInput"></a>

```typescript
public readonly upstreamsInput: IResolvable | MoqRelayConfigUpstreamsUpstreams[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MoqRelayConfigUpstreams;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams">MoqRelayConfigUpstreams</a>

---


### MoqRelayConfigUpstreamsUpstreamsList <a name="MoqRelayConfigUpstreamsUpstreamsList" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.Initializer"></a>

```typescript
import { moqRelay } from '@cdktn/provider-cloudflare'

new moqRelay.MoqRelayConfigUpstreamsUpstreamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.get"></a>

```typescript
public get(index: number): MoqRelayConfigUpstreamsUpstreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MoqRelayConfigUpstreamsUpstreams[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>[]

---


### MoqRelayConfigUpstreamsUpstreamsOutputReference <a name="MoqRelayConfigUpstreamsUpstreamsOutputReference" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer"></a>

```typescript
import { moqRelay } from '@cdktn/provider-cloudflare'

new moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MoqRelayConfigUpstreamsUpstreams;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>

---



