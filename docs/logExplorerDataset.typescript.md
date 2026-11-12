# `logExplorerDataset` Submodule <a name="`logExplorerDataset` Submodule" id="@cdktn/provider-cloudflare.logExplorerDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogExplorerDataset <a name="LogExplorerDataset" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset cloudflare_log_explorer_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer"></a>

```typescript
import { logExplorerDataset } from '@cdktn/provider-cloudflare'

new logExplorerDataset.LogExplorerDataset(scope: Construct, id: string, config: LogExplorerDatasetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig">LogExplorerDatasetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig">LogExplorerDatasetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetFilterAttackTraffic">resetFilterAttackTraffic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFields` <a name="putFields" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.putFields"></a>

```typescript
public putFields(value: IResolvable | LogExplorerDatasetFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields">LogExplorerDatasetFields</a>[]

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFields` <a name="resetFields" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetFields"></a>

```typescript
public resetFields(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetFilterAttackTraffic` <a name="resetFilterAttackTraffic" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetFilterAttackTraffic"></a>

```typescript
public resetFilterAttackTraffic(): void
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetZoneId"></a>

```typescript
public resetZoneId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LogExplorerDataset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.isConstruct"></a>

```typescript
import { logExplorerDataset } from '@cdktn/provider-cloudflare'

logExplorerDataset.LogExplorerDataset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.isTerraformElement"></a>

```typescript
import { logExplorerDataset } from '@cdktn/provider-cloudflare'

logExplorerDataset.LogExplorerDataset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.isTerraformResource"></a>

```typescript
import { logExplorerDataset } from '@cdktn/provider-cloudflare'

logExplorerDataset.LogExplorerDataset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.generateConfigForImport"></a>

```typescript
import { logExplorerDataset } from '@cdktn/provider-cloudflare'

logExplorerDataset.LogExplorerDataset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LogExplorerDataset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogExplorerDataset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogExplorerDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LogExplorerDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList">LogExplorerDatasetFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.datasetInput">datasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.fieldsInput">fieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields">LogExplorerDatasetFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.filterAttackTrafficInput">filterAttackTrafficInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.dataset">dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.filterAttackTraffic">filterAttackTraffic</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.fields"></a>

```typescript
public readonly fields: LogExplorerDatasetFieldsList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList">LogExplorerDatasetFieldsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.datasetInput"></a>

```typescript
public readonly datasetInput: string;
```

- *Type:* string

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: IResolvable | LogExplorerDatasetFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields">LogExplorerDatasetFields</a>[]

---

##### `filterAttackTrafficInput`<sup>Optional</sup> <a name="filterAttackTrafficInput" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.filterAttackTrafficInput"></a>

```typescript
public readonly filterAttackTrafficInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `filterAttackTraffic`<sup>Required</sup> <a name="filterAttackTraffic" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.filterAttackTraffic"></a>

```typescript
public readonly filterAttackTraffic: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogExplorerDatasetConfig <a name="LogExplorerDatasetConfig" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.Initializer"></a>

```typescript
import { logExplorerDataset } from '@cdktn/provider-cloudflare'

const logExplorerDatasetConfig: logExplorerDataset.LogExplorerDatasetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.dataset">dataset</a></code> | <code>string</code> | Dataset type name to create (e.g. `http_requests`). |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.accountId">accountId</a></code> | <code>string</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set to `false` to allow deletion of this dataset. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to enable or disable log ingest for this dataset. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.fields">fields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields">LogExplorerDatasetFields</a>[]</code> | Controls which fields the API ingests. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.filter">filter</a></code> | <code>string</code> | Optional Logpush filter predicate to restrict which events are ingested. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.filterAttackTraffic">filterAttackTraffic</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to filter attack traffic from the Logpush job. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.zoneId">zoneId</a></code> | <code>string</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

Dataset type name to create (e.g. `http_requests`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#dataset LogExplorerDataset#dataset}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#account_id LogExplorerDataset#account_id}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set to `false` to allow deletion of this dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#deletion_protection LogExplorerDataset#deletion_protection}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to enable or disable log ingest for this dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#enabled LogExplorerDataset#enabled}

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.fields"></a>

```typescript
public readonly fields: IResolvable | LogExplorerDatasetFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields">LogExplorerDatasetFields</a>[]

Controls which fields the API ingests.

Defaults to all available
fields when absent.
Each dataset requires its own timestamp field to remain enabled (the
field name varies per dataset type); omitting it from an explicit
selection is rejected by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#fields LogExplorerDataset#fields}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Optional Logpush filter predicate to restrict which events are ingested.

Omitting this attribute means no filter. An empty string also means no filter.
Removing a configured filter sends an empty string to clear it in the API.
The provider stores missing or null API filters as empty strings in state.
See [Logpush filters](https://developers.cloudflare.com/logs/reference/filters/)
for syntax and examples.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#filter LogExplorerDataset#filter}

---

##### `filterAttackTraffic`<sup>Optional</sup> <a name="filterAttackTraffic" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.filterAttackTraffic"></a>

```typescript
public readonly filterAttackTraffic: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to filter attack traffic from the Logpush job.

The API defaults to true on creation for http_requests, firewall_events, and network_analytics_logs. If omitted on update, the existing setting is kept. The API omits this setting for datasets that do not support it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#filter_attack_traffic LogExplorerDataset#filter_attack_traffic}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#zone_id LogExplorerDataset#zone_id}

---

### LogExplorerDatasetFields <a name="LogExplorerDatasetFields" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields.Initializer"></a>

```typescript
import { logExplorerDataset } from '@cdktn/provider-cloudflare'

const logExplorerDatasetFields: logExplorerDataset.LogExplorerDatasetFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the API includes this field in log ingest. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields.property.name">name</a></code> | <code>string</code> | Field name. Names are matched without regard to case. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the API includes this field in log ingest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#enabled LogExplorerDataset#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Field name. Names are matched without regard to case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#name LogExplorerDataset#name}

---

## Classes <a name="Classes" id="Classes"></a>

### LogExplorerDatasetFieldsList <a name="LogExplorerDatasetFieldsList" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.Initializer"></a>

```typescript
import { logExplorerDataset } from '@cdktn/provider-cloudflare'

new logExplorerDataset.LogExplorerDatasetFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.get"></a>

```typescript
public get(index: number): LogExplorerDatasetFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields">LogExplorerDatasetFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogExplorerDatasetFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields">LogExplorerDatasetFields</a>[]

---


### LogExplorerDatasetFieldsOutputReference <a name="LogExplorerDatasetFieldsOutputReference" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.Initializer"></a>

```typescript
import { logExplorerDataset } from '@cdktn/provider-cloudflare'

new logExplorerDataset.LogExplorerDatasetFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields">LogExplorerDatasetFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogExplorerDatasetFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields">LogExplorerDatasetFields</a>

---



