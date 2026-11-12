# `zeroTrustCasbFindingType` Submodule <a name="`zeroTrustCasbFindingType` Submodule" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustCasbFindingType <a name="ZeroTrustCasbFindingType" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type cloudflare_zero_trust_casb_finding_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer"></a>

```typescript
import { zeroTrustCasbFindingType } from '@cdktn/provider-cloudflare'

new zeroTrustCasbFindingType.ZeroTrustCasbFindingType(scope: Construct, id: string, config: ZeroTrustCasbFindingTypeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig">ZeroTrustCasbFindingTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig">ZeroTrustCasbFindingTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.resetIntegrationIds">resetIntegrationIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetIntegrationIds` <a name="resetIntegrationIds" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.resetIntegrationIds"></a>

```typescript
public resetIntegrationIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustCasbFindingType resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isConstruct"></a>

```typescript
import { zeroTrustCasbFindingType } from '@cdktn/provider-cloudflare'

zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isTerraformElement"></a>

```typescript
import { zeroTrustCasbFindingType } from '@cdktn/provider-cloudflare'

zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isTerraformResource"></a>

```typescript
import { zeroTrustCasbFindingType } from '@cdktn/provider-cloudflare'

zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.generateConfigForImport"></a>

```typescript
import { zeroTrustCasbFindingType } from '@cdktn/provider-cloudflare'

zeroTrustCasbFindingType.ZeroTrustCasbFindingType.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ZeroTrustCasbFindingType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustCasbFindingType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustCasbFindingType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustCasbFindingType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.category">category</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference">ZeroTrustCasbFindingTypeCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.matchCount">matchCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.origin">origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.quarantined">quarantined</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.vendor">vendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.appliesToAllIntegrationsInput">appliesToAllIntegrationsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetClassInput">assetClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetVendorInput">assetVendorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.integrationIdsInput">integrationIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.appliesToAllIntegrations">appliesToAllIntegrations</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetClass">assetClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetVendor">assetVendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.integrationIds">integrationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.severity">severity</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.category"></a>

```typescript
public readonly category: ZeroTrustCasbFindingTypeCategoryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference">ZeroTrustCasbFindingTypeCategoryOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `matchCount`<sup>Required</sup> <a name="matchCount" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.matchCount"></a>

```typescript
public readonly matchCount: number;
```

- *Type:* number

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

---

##### `quarantined`<sup>Required</sup> <a name="quarantined" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.quarantined"></a>

```typescript
public readonly quarantined: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.vendor"></a>

```typescript
public readonly vendor: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `appliesToAllIntegrationsInput`<sup>Optional</sup> <a name="appliesToAllIntegrationsInput" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.appliesToAllIntegrationsInput"></a>

```typescript
public readonly appliesToAllIntegrationsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `assetClassInput`<sup>Optional</sup> <a name="assetClassInput" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetClassInput"></a>

```typescript
public readonly assetClassInput: string;
```

- *Type:* string

---

##### `assetVendorInput`<sup>Optional</sup> <a name="assetVendorInput" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetVendorInput"></a>

```typescript
public readonly assetVendorInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `integrationIdsInput`<sup>Optional</sup> <a name="integrationIdsInput" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.integrationIdsInput"></a>

```typescript
public readonly integrationIdsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `appliesToAllIntegrations`<sup>Required</sup> <a name="appliesToAllIntegrations" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.appliesToAllIntegrations"></a>

```typescript
public readonly appliesToAllIntegrations: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `assetClass`<sup>Required</sup> <a name="assetClass" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetClass"></a>

```typescript
public readonly assetClass: string;
```

- *Type:* string

---

##### `assetVendor`<sup>Required</sup> <a name="assetVendor" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetVendor"></a>

```typescript
public readonly assetVendor: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `integrationIds`<sup>Required</sup> <a name="integrationIds" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.integrationIds"></a>

```typescript
public readonly integrationIds: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustCasbFindingTypeCategory <a name="ZeroTrustCasbFindingTypeCategory" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategory.Initializer"></a>

```typescript
import { zeroTrustCasbFindingType } from '@cdktn/provider-cloudflare'

const zeroTrustCasbFindingTypeCategory: zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategory = { ... }
```


### ZeroTrustCasbFindingTypeConfig <a name="ZeroTrustCasbFindingTypeConfig" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.Initializer"></a>

```typescript
import { zeroTrustCasbFindingType } from '@cdktn/provider-cloudflare'

const zeroTrustCasbFindingTypeConfig: zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#account_id ZeroTrustCasbFindingType#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.appliesToAllIntegrations">appliesToAllIntegrations</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, this finding type applies to every current and future integration of the vendor. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.assetClass">assetClass</a></code> | <code>string</code> | Asset class this finding type applies to (PascalCase, e.g. GoogleWorkspaceFile). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.assetVendor">assetVendor</a></code> | <code>string</code> | Canonical vendor enum for the platform whose assets this finding type evaluates. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.description">description</a></code> | <code>string</code> | Human-readable description of the finding type. Cannot be empty. Maximum 4096 characters. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.expression">expression</a></code> | <code>string</code> | Rego expression body for the policy. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.name">name</a></code> | <code>string</code> | Human-readable name for the finding type. Maximum 256 characters. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.severity">severity</a></code> | <code>string</code> | Default severity used when no integration-specific severity override exists. Available values: "Critical", "High", "Medium", "Low". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.integrationIds">integrationIds</a></code> | <code>string[]</code> | Required and non-empty when applies_to_all_integrations is false; omit when it is true. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#account_id ZeroTrustCasbFindingType#account_id}.

---

##### `appliesToAllIntegrations`<sup>Required</sup> <a name="appliesToAllIntegrations" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.appliesToAllIntegrations"></a>

```typescript
public readonly appliesToAllIntegrations: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, this finding type applies to every current and future integration of the vendor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#applies_to_all_integrations ZeroTrustCasbFindingType#applies_to_all_integrations}

---

##### `assetClass`<sup>Required</sup> <a name="assetClass" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.assetClass"></a>

```typescript
public readonly assetClass: string;
```

- *Type:* string

Asset class this finding type applies to (PascalCase, e.g. GoogleWorkspaceFile).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#asset_class ZeroTrustCasbFindingType#asset_class}

---

##### `assetVendor`<sup>Required</sup> <a name="assetVendor" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.assetVendor"></a>

```typescript
public readonly assetVendor: string;
```

- *Type:* string

Canonical vendor enum for the platform whose assets this finding type evaluates.

Available values: "ANTHROPIC", "AWS", "BITBUCKET", "BOX", "CONFLUENCE", "DROPBOX", "GITHUB", "GOOGLE_CLOUD_PLATFORM", "GOOGLE_WORKSPACE", "JIRA", "MICROSOFT", "OPENAI", "SALESFORCE", "SERVICENOW", "SLACK", "ZOOM".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#asset_vendor ZeroTrustCasbFindingType#asset_vendor}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-readable description of the finding type. Cannot be empty. Maximum 4096 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#description ZeroTrustCasbFindingType#description}

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Rego expression body for the policy.

`package cloudflare.casb.custom` and `import rego.v1` are added automatically. Do not include package or import declarations. This field cannot be changed after creation. Maximum 4096 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#expression ZeroTrustCasbFindingType#expression}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Human-readable name for the finding type. Maximum 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#name ZeroTrustCasbFindingType#name}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

Default severity used when no integration-specific severity override exists. Available values: "Critical", "High", "Medium", "Low".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#severity ZeroTrustCasbFindingType#severity}

---

##### `integrationIds`<sup>Optional</sup> <a name="integrationIds" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.integrationIds"></a>

```typescript
public readonly integrationIds: string[];
```

- *Type:* string[]

Required and non-empty when applies_to_all_integrations is false; omit when it is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#integration_ids ZeroTrustCasbFindingType#integration_ids}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustCasbFindingTypeCategoryOutputReference <a name="ZeroTrustCasbFindingTypeCategoryOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.Initializer"></a>

```typescript
import { zeroTrustCasbFindingType } from '@cdktn/provider-cloudflare'

new zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.observation">observation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.product">product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategory">ZeroTrustCasbFindingTypeCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `observation`<sup>Required</sup> <a name="observation" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.observation"></a>

```typescript
public readonly observation: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustCasbFindingTypeCategory;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategory">ZeroTrustCasbFindingTypeCategory</a>

---



