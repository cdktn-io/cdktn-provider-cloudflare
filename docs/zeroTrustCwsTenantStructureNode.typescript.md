# `zeroTrustCwsTenantStructureNode` Submodule <a name="`zeroTrustCwsTenantStructureNode` Submodule" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustCwsTenantStructureNode <a name="ZeroTrustCwsTenantStructureNode" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node cloudflare_zero_trust_cws_tenant_structure_node}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer"></a>

```typescript
import { zeroTrustCwsTenantStructureNode } from '@cdktn/provider-cloudflare'

new zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode(scope: Construct, id: string, config: ZeroTrustCwsTenantStructureNodeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig">ZeroTrustCwsTenantStructureNodeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig">ZeroTrustCwsTenantStructureNodeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.resetParent">resetParent</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.resetName"></a>

```typescript
public resetName(): void
```

##### `resetParent` <a name="resetParent" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.resetParent"></a>

```typescript
public resetParent(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustCwsTenantStructureNode resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isConstruct"></a>

```typescript
import { zeroTrustCwsTenantStructureNode } from '@cdktn/provider-cloudflare'

zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isTerraformElement"></a>

```typescript
import { zeroTrustCwsTenantStructureNode } from '@cdktn/provider-cloudflare'

zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isTerraformResource"></a>

```typescript
import { zeroTrustCwsTenantStructureNode } from '@cdktn/provider-cloudflare'

zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.generateConfigForImport"></a>

```typescript
import { zeroTrustCwsTenantStructureNode } from '@cdktn/provider-cloudflare'

zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ZeroTrustCwsTenantStructureNode resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustCwsTenantStructureNode to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustCwsTenantStructureNode that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustCwsTenantStructureNode to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nativeIdInput">nativeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nodeKindInput">nodeKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.structureIdInput">structureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nativeId">nativeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nodeKind">nodeKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.structureId">structureId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nativeIdInput`<sup>Optional</sup> <a name="nativeIdInput" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nativeIdInput"></a>

```typescript
public readonly nativeIdInput: string;
```

- *Type:* string

---

##### `nodeKindInput`<sup>Optional</sup> <a name="nodeKindInput" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nodeKindInput"></a>

```typescript
public readonly nodeKindInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `structureIdInput`<sup>Optional</sup> <a name="structureIdInput" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.structureIdInput"></a>

```typescript
public readonly structureIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nativeId`<sup>Required</sup> <a name="nativeId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nativeId"></a>

```typescript
public readonly nativeId: string;
```

- *Type:* string

---

##### `nodeKind`<sup>Required</sup> <a name="nodeKind" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nodeKind"></a>

```typescript
public readonly nodeKind: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `structureId`<sup>Required</sup> <a name="structureId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.structureId"></a>

```typescript
public readonly structureId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustCwsTenantStructureNodeConfig <a name="ZeroTrustCwsTenantStructureNodeConfig" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.Initializer"></a>

```typescript
import { zeroTrustCwsTenantStructureNode } from '@cdktn/provider-cloudflare'

const zeroTrustCwsTenantStructureNodeConfig: zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.accountId">accountId</a></code> | <code>string</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.nativeId">nativeId</a></code> | <code>string</code> | Cloud-native identifier of this node, unique within the structure; |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.nodeKind">nodeKind</a></code> | <code>string</code> | Position in the tree. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.structureId">structureId</a></code> | <code>string</code> | ID of the parent tenant structure. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.name">name</a></code> | <code>string</code> | Display name (e.g. an OU or account name), mutable. Optional; empty by default. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.parent">parent</a></code> | <code>string</code> | Native ID of this node's parent. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#account_id ZeroTrustCwsTenantStructureNode#account_id}

---

##### `nativeId`<sup>Required</sup> <a name="nativeId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.nativeId"></a>

```typescript
public readonly nativeId: string;
```

- *Type:* string

Cloud-native identifier of this node, unique within the structure;

the parent-reference target. Shape depends on the structure's application. Immutable after create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#native_id ZeroTrustCwsTenantStructureNode#native_id}

---

##### `nodeKind`<sup>Required</sup> <a name="nodeKind" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.nodeKind"></a>

```typescript
public readonly nodeKind: string;
```

- *Type:* string

Position in the tree.

Legal values depend on the structure's application (aws: root/ou/account; cloudflare: org/account/zone). At most one root per structure. Immutable after create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#node_kind ZeroTrustCwsTenantStructureNode#node_kind}

---

##### `structureId`<sup>Required</sup> <a name="structureId" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.structureId"></a>

```typescript
public readonly structureId: string;
```

- *Type:* string

ID of the parent tenant structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#structure_id ZeroTrustCwsTenantStructureNode#structure_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Display name (e.g. an OU or account name), mutable. Optional; empty by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#name ZeroTrustCwsTenantStructureNode#name}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Native ID of this node's parent.

Required for non-root nodes and omitted for the root. The parent must be in the same structure and able to contain this node kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#parent ZeroTrustCwsTenantStructureNode#parent}

---



