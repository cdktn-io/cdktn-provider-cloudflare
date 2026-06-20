# `aiGatewayDynamicRouting` Submodule <a name="`aiGatewayDynamicRouting` Submodule" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiGatewayDynamicRouting <a name="AiGatewayDynamicRouting" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing cloudflare_ai_gateway_dynamic_routing}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

new aiGatewayDynamicRouting.AiGatewayDynamicRouting(scope: Construct, id: string, config: AiGatewayDynamicRoutingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig">AiGatewayDynamicRoutingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig">AiGatewayDynamicRoutingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.putElements">putElements</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putElements` <a name="putElements" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.putElements"></a>

```typescript
public putElements(value: IResolvable | AiGatewayDynamicRoutingElements[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.putElements.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AiGatewayDynamicRouting resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isConstruct"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

aiGatewayDynamicRouting.AiGatewayDynamicRouting.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isTerraformElement"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

aiGatewayDynamicRouting.AiGatewayDynamicRouting.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isTerraformResource"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

aiGatewayDynamicRouting.AiGatewayDynamicRouting.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.generateConfigForImport"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

aiGatewayDynamicRouting.AiGatewayDynamicRouting.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AiGatewayDynamicRouting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AiGatewayDynamicRouting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AiGatewayDynamicRouting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AiGatewayDynamicRouting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.deployment">deployment</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference">AiGatewayDynamicRoutingDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.elements">elements</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList">AiGatewayDynamicRoutingElementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.route">route</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference">AiGatewayDynamicRoutingRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.success">success</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.version">version</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference">AiGatewayDynamicRoutingVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.elementsInput">elementsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.gatewayIdInput">gatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.deployment"></a>

```typescript
public readonly deployment: AiGatewayDynamicRoutingDeploymentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference">AiGatewayDynamicRoutingDeploymentOutputReference</a>

---

##### `elements`<sup>Required</sup> <a name="elements" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.elements"></a>

```typescript
public readonly elements: AiGatewayDynamicRoutingElementsList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList">AiGatewayDynamicRoutingElementsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.route"></a>

```typescript
public readonly route: AiGatewayDynamicRoutingRouteOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference">AiGatewayDynamicRoutingRouteOutputReference</a>

---

##### `success`<sup>Required</sup> <a name="success" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.success"></a>

```typescript
public readonly success: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.version"></a>

```typescript
public readonly version: AiGatewayDynamicRoutingVersionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference">AiGatewayDynamicRoutingVersionOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `elementsInput`<sup>Optional</sup> <a name="elementsInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.elementsInput"></a>

```typescript
public readonly elementsInput: IResolvable | AiGatewayDynamicRoutingElements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>[]

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.gatewayIdInput"></a>

```typescript
public readonly gatewayIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AiGatewayDynamicRoutingConfig <a name="AiGatewayDynamicRoutingConfig" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

const aiGatewayDynamicRoutingConfig: aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#account_id AiGatewayDynamicRouting#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.elements">elements</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#elements AiGatewayDynamicRouting#elements}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.gatewayId">gatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#gateway_id AiGatewayDynamicRouting#gateway_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#name AiGatewayDynamicRouting#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#account_id AiGatewayDynamicRouting#account_id}.

---

##### `elements`<sup>Required</sup> <a name="elements" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.elements"></a>

```typescript
public readonly elements: IResolvable | AiGatewayDynamicRoutingElements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#elements AiGatewayDynamicRouting#elements}.

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#gateway_id AiGatewayDynamicRouting#gateway_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#name AiGatewayDynamicRouting#name}.

---

### AiGatewayDynamicRoutingDeployment <a name="AiGatewayDynamicRoutingDeployment" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeployment.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

const aiGatewayDynamicRoutingDeployment: aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeployment = { ... }
```


### AiGatewayDynamicRoutingElements <a name="AiGatewayDynamicRoutingElements" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

const aiGatewayDynamicRoutingElements: aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#id AiGatewayDynamicRouting#id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs">AiGatewayDynamicRoutingElementsOutputs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#outputs AiGatewayDynamicRouting#outputs}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.type">type</a></code> | <code>string</code> | Available values: "start", "conditional", "percentage", "rate", "model", "end". |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties">AiGatewayDynamicRoutingElementsProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#properties AiGatewayDynamicRouting#properties}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#id AiGatewayDynamicRouting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.outputs"></a>

```typescript
public readonly outputs: AiGatewayDynamicRoutingElementsOutputs;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs">AiGatewayDynamicRoutingElementsOutputs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#outputs AiGatewayDynamicRouting#outputs}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Available values: "start", "conditional", "percentage", "rate", "model", "end".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#type AiGatewayDynamicRouting#type}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.properties"></a>

```typescript
public readonly properties: AiGatewayDynamicRoutingElementsProperties;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties">AiGatewayDynamicRoutingElementsProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#properties AiGatewayDynamicRouting#properties}.

---

### AiGatewayDynamicRoutingElementsOutputs <a name="AiGatewayDynamicRoutingElementsOutputs" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

const aiGatewayDynamicRoutingElementsOutputs: aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.elementId">elementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.fallback">fallback</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback">AiGatewayDynamicRoutingElementsOutputsFallback</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#fallback AiGatewayDynamicRouting#fallback}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.false">false</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse">AiGatewayDynamicRoutingElementsOutputsFalse</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#false AiGatewayDynamicRouting#false}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.next">next</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext">AiGatewayDynamicRoutingElementsOutputsNext</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#next AiGatewayDynamicRouting#next}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.success">success</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess">AiGatewayDynamicRoutingElementsOutputsSuccess</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#success AiGatewayDynamicRouting#success}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.true">true</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue">AiGatewayDynamicRoutingElementsOutputsTrue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#true AiGatewayDynamicRouting#true}. |

---

##### `elementId`<sup>Optional</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

##### `fallback`<sup>Optional</sup> <a name="fallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.fallback"></a>

```typescript
public readonly fallback: AiGatewayDynamicRoutingElementsOutputsFallback;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback">AiGatewayDynamicRoutingElementsOutputsFallback</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#fallback AiGatewayDynamicRouting#fallback}.

---

##### `false`<sup>Optional</sup> <a name="false" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.false"></a>

```typescript
public readonly false: AiGatewayDynamicRoutingElementsOutputsFalse;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse">AiGatewayDynamicRoutingElementsOutputsFalse</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#false AiGatewayDynamicRouting#false}.

---

##### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.next"></a>

```typescript
public readonly next: AiGatewayDynamicRoutingElementsOutputsNext;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext">AiGatewayDynamicRoutingElementsOutputsNext</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#next AiGatewayDynamicRouting#next}.

---

##### `success`<sup>Optional</sup> <a name="success" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.success"></a>

```typescript
public readonly success: AiGatewayDynamicRoutingElementsOutputsSuccess;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess">AiGatewayDynamicRoutingElementsOutputsSuccess</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#success AiGatewayDynamicRouting#success}.

---

##### `true`<sup>Optional</sup> <a name="true" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.true"></a>

```typescript
public readonly true: AiGatewayDynamicRoutingElementsOutputsTrue;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue">AiGatewayDynamicRoutingElementsOutputsTrue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#true AiGatewayDynamicRouting#true}.

---

### AiGatewayDynamicRoutingElementsOutputsFallback <a name="AiGatewayDynamicRoutingElementsOutputsFallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

const aiGatewayDynamicRoutingElementsOutputsFallback: aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback.property.elementId">elementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}. |

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

### AiGatewayDynamicRoutingElementsOutputsFalse <a name="AiGatewayDynamicRoutingElementsOutputsFalse" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

const aiGatewayDynamicRoutingElementsOutputsFalse: aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse.property.elementId">elementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}. |

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

### AiGatewayDynamicRoutingElementsOutputsNext <a name="AiGatewayDynamicRoutingElementsOutputsNext" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

const aiGatewayDynamicRoutingElementsOutputsNext: aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext.property.elementId">elementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}. |

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

### AiGatewayDynamicRoutingElementsOutputsSuccess <a name="AiGatewayDynamicRoutingElementsOutputsSuccess" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

const aiGatewayDynamicRoutingElementsOutputsSuccess: aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess.property.elementId">elementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}. |

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

### AiGatewayDynamicRoutingElementsOutputsTrue <a name="AiGatewayDynamicRoutingElementsOutputsTrue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

const aiGatewayDynamicRoutingElementsOutputsTrue: aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue.property.elementId">elementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}. |

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

### AiGatewayDynamicRoutingElementsProperties <a name="AiGatewayDynamicRoutingElementsProperties" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

const aiGatewayDynamicRoutingElementsProperties: aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.aiGatewayDynamicRoutingProvider">aiGatewayDynamicRoutingProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#ai_gateway_dynamic_routing_provider AiGatewayDynamicRouting#ai_gateway_dynamic_routing_provider}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.conditions">conditions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#conditions AiGatewayDynamicRouting#conditions}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#key AiGatewayDynamicRouting#key}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.limit">limit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#limit AiGatewayDynamicRouting#limit}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.limitType">limitType</a></code> | <code>string</code> | Available values: "count", "cost". |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.model">model</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#model AiGatewayDynamicRouting#model}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.retries">retries</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#retries AiGatewayDynamicRouting#retries}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.timeout">timeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#timeout AiGatewayDynamicRouting#timeout}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.window">window</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#window AiGatewayDynamicRouting#window}. |

---

##### `aiGatewayDynamicRoutingProvider`<sup>Optional</sup> <a name="aiGatewayDynamicRoutingProvider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.aiGatewayDynamicRoutingProvider"></a>

```typescript
public readonly aiGatewayDynamicRoutingProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#ai_gateway_dynamic_routing_provider AiGatewayDynamicRouting#ai_gateway_dynamic_routing_provider}.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.conditions"></a>

```typescript
public readonly conditions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#conditions AiGatewayDynamicRouting#conditions}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#key AiGatewayDynamicRouting#key}.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#limit AiGatewayDynamicRouting#limit}.

---

##### `limitType`<sup>Optional</sup> <a name="limitType" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.limitType"></a>

```typescript
public readonly limitType: string;
```

- *Type:* string

Available values: "count", "cost".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#limit_type AiGatewayDynamicRouting#limit_type}

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#model AiGatewayDynamicRouting#model}.

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#retries AiGatewayDynamicRouting#retries}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#timeout AiGatewayDynamicRouting#timeout}.

---

##### `window`<sup>Optional</sup> <a name="window" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.window"></a>

```typescript
public readonly window: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway_dynamic_routing#window AiGatewayDynamicRouting#window}.

---

### AiGatewayDynamicRoutingRoute <a name="AiGatewayDynamicRoutingRoute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRoute.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

const aiGatewayDynamicRoutingRoute: aiGatewayDynamicRouting.AiGatewayDynamicRoutingRoute = { ... }
```


### AiGatewayDynamicRoutingRouteDeployment <a name="AiGatewayDynamicRoutingRouteDeployment" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeployment.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

const aiGatewayDynamicRoutingRouteDeployment: aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeployment = { ... }
```


### AiGatewayDynamicRoutingRouteElements <a name="AiGatewayDynamicRoutingRouteElements" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElements.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

const aiGatewayDynamicRoutingRouteElements: aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElements = { ... }
```


### AiGatewayDynamicRoutingRouteElementsOutputs <a name="AiGatewayDynamicRoutingRouteElementsOutputs" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputs.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

const aiGatewayDynamicRoutingRouteElementsOutputs: aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputs = { ... }
```


### AiGatewayDynamicRoutingRouteElementsOutputsFallback <a name="AiGatewayDynamicRoutingRouteElementsOutputsFallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallback.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

const aiGatewayDynamicRoutingRouteElementsOutputsFallback: aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallback = { ... }
```


### AiGatewayDynamicRoutingRouteElementsOutputsFalse <a name="AiGatewayDynamicRoutingRouteElementsOutputsFalse" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalse.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

const aiGatewayDynamicRoutingRouteElementsOutputsFalse: aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalse = { ... }
```


### AiGatewayDynamicRoutingRouteElementsOutputsNext <a name="AiGatewayDynamicRoutingRouteElementsOutputsNext" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNext.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

const aiGatewayDynamicRoutingRouteElementsOutputsNext: aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNext = { ... }
```


### AiGatewayDynamicRoutingRouteElementsOutputsSuccess <a name="AiGatewayDynamicRoutingRouteElementsOutputsSuccess" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccess.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

const aiGatewayDynamicRoutingRouteElementsOutputsSuccess: aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccess = { ... }
```


### AiGatewayDynamicRoutingRouteElementsOutputsTrue <a name="AiGatewayDynamicRoutingRouteElementsOutputsTrue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrue.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

const aiGatewayDynamicRoutingRouteElementsOutputsTrue: aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrue = { ... }
```


### AiGatewayDynamicRoutingRouteElementsProperties <a name="AiGatewayDynamicRoutingRouteElementsProperties" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsProperties.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

const aiGatewayDynamicRoutingRouteElementsProperties: aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsProperties = { ... }
```


### AiGatewayDynamicRoutingRouteVersion <a name="AiGatewayDynamicRoutingRouteVersion" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersion.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

const aiGatewayDynamicRoutingRouteVersion: aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersion = { ... }
```


### AiGatewayDynamicRoutingVersion <a name="AiGatewayDynamicRoutingVersion" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersion.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

const aiGatewayDynamicRoutingVersion: aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersion = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### AiGatewayDynamicRoutingDeploymentOutputReference <a name="AiGatewayDynamicRoutingDeploymentOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

new aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeployment">AiGatewayDynamicRoutingDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiGatewayDynamicRoutingDeployment;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeployment">AiGatewayDynamicRoutingDeployment</a>

---


### AiGatewayDynamicRoutingElementsList <a name="AiGatewayDynamicRoutingElementsList" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

new aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.get"></a>

```typescript
public get(index: number): AiGatewayDynamicRoutingElementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayDynamicRoutingElements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>[]

---


### AiGatewayDynamicRoutingElementsOutputReference <a name="AiGatewayDynamicRoutingElementsOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

new aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putOutputs">putOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOutputs` <a name="putOutputs" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putOutputs"></a>

```typescript
public putOutputs(value: AiGatewayDynamicRoutingElementsOutputs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putOutputs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs">AiGatewayDynamicRoutingElementsOutputs</a>

---

##### `putProperties` <a name="putProperties" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putProperties"></a>

```typescript
public putProperties(value: AiGatewayDynamicRoutingElementsProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties">AiGatewayDynamicRoutingElementsProperties</a>

---

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference">AiGatewayDynamicRoutingElementsOutputsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference">AiGatewayDynamicRoutingElementsPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.outputsInput">outputsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs">AiGatewayDynamicRoutingElementsOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties">AiGatewayDynamicRoutingElementsProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.outputs"></a>

```typescript
public readonly outputs: AiGatewayDynamicRoutingElementsOutputsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference">AiGatewayDynamicRoutingElementsOutputsOutputReference</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.properties"></a>

```typescript
public readonly properties: AiGatewayDynamicRoutingElementsPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference">AiGatewayDynamicRoutingElementsPropertiesOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `outputsInput`<sup>Optional</sup> <a name="outputsInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.outputsInput"></a>

```typescript
public readonly outputsInput: IResolvable | AiGatewayDynamicRoutingElementsOutputs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs">AiGatewayDynamicRoutingElementsOutputs</a>

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: IResolvable | AiGatewayDynamicRoutingElementsProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties">AiGatewayDynamicRoutingElementsProperties</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayDynamicRoutingElements;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>

---


### AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference <a name="AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

new aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.elementIdInput">elementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.elementId">elementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback">AiGatewayDynamicRoutingElementsOutputsFallback</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `elementIdInput`<sup>Optional</sup> <a name="elementIdInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.elementIdInput"></a>

```typescript
public readonly elementIdInput: string;
```

- *Type:* string

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayDynamicRoutingElementsOutputsFallback;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback">AiGatewayDynamicRoutingElementsOutputsFallback</a>

---


### AiGatewayDynamicRoutingElementsOutputsFalseOutputReference <a name="AiGatewayDynamicRoutingElementsOutputsFalseOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

new aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.elementIdInput">elementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.elementId">elementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse">AiGatewayDynamicRoutingElementsOutputsFalse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `elementIdInput`<sup>Optional</sup> <a name="elementIdInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.elementIdInput"></a>

```typescript
public readonly elementIdInput: string;
```

- *Type:* string

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayDynamicRoutingElementsOutputsFalse;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse">AiGatewayDynamicRoutingElementsOutputsFalse</a>

---


### AiGatewayDynamicRoutingElementsOutputsNextOutputReference <a name="AiGatewayDynamicRoutingElementsOutputsNextOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

new aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.elementIdInput">elementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.elementId">elementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext">AiGatewayDynamicRoutingElementsOutputsNext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `elementIdInput`<sup>Optional</sup> <a name="elementIdInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.elementIdInput"></a>

```typescript
public readonly elementIdInput: string;
```

- *Type:* string

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayDynamicRoutingElementsOutputsNext;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext">AiGatewayDynamicRoutingElementsOutputsNext</a>

---


### AiGatewayDynamicRoutingElementsOutputsOutputReference <a name="AiGatewayDynamicRoutingElementsOutputsOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

new aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putFallback">putFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putFalse">putFalse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putNext">putNext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putSuccess">putSuccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putTrue">putTrue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetElementId">resetElementId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetFallback">resetFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetFalse">resetFalse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetNext">resetNext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetSuccess">resetSuccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetTrue">resetTrue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFallback` <a name="putFallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putFallback"></a>

```typescript
public putFallback(value: AiGatewayDynamicRoutingElementsOutputsFallback): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putFallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback">AiGatewayDynamicRoutingElementsOutputsFallback</a>

---

##### `putFalse` <a name="putFalse" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putFalse"></a>

```typescript
public putFalse(value: AiGatewayDynamicRoutingElementsOutputsFalse): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putFalse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse">AiGatewayDynamicRoutingElementsOutputsFalse</a>

---

##### `putNext` <a name="putNext" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putNext"></a>

```typescript
public putNext(value: AiGatewayDynamicRoutingElementsOutputsNext): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putNext.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext">AiGatewayDynamicRoutingElementsOutputsNext</a>

---

##### `putSuccess` <a name="putSuccess" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putSuccess"></a>

```typescript
public putSuccess(value: AiGatewayDynamicRoutingElementsOutputsSuccess): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putSuccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess">AiGatewayDynamicRoutingElementsOutputsSuccess</a>

---

##### `putTrue` <a name="putTrue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putTrue"></a>

```typescript
public putTrue(value: AiGatewayDynamicRoutingElementsOutputsTrue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putTrue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue">AiGatewayDynamicRoutingElementsOutputsTrue</a>

---

##### `resetElementId` <a name="resetElementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetElementId"></a>

```typescript
public resetElementId(): void
```

##### `resetFallback` <a name="resetFallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetFallback"></a>

```typescript
public resetFallback(): void
```

##### `resetFalse` <a name="resetFalse" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetFalse"></a>

```typescript
public resetFalse(): void
```

##### `resetNext` <a name="resetNext" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetNext"></a>

```typescript
public resetNext(): void
```

##### `resetSuccess` <a name="resetSuccess" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetSuccess"></a>

```typescript
public resetSuccess(): void
```

##### `resetTrue` <a name="resetTrue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetTrue"></a>

```typescript
public resetTrue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.fallback">fallback</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference">AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.false">false</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference">AiGatewayDynamicRoutingElementsOutputsFalseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.next">next</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference">AiGatewayDynamicRoutingElementsOutputsNextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.success">success</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference">AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.true">true</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference">AiGatewayDynamicRoutingElementsOutputsTrueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.elementIdInput">elementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.fallbackInput">fallbackInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback">AiGatewayDynamicRoutingElementsOutputsFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.falseInput">falseInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse">AiGatewayDynamicRoutingElementsOutputsFalse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.nextInput">nextInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext">AiGatewayDynamicRoutingElementsOutputsNext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.successInput">successInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess">AiGatewayDynamicRoutingElementsOutputsSuccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.trueInput">trueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue">AiGatewayDynamicRoutingElementsOutputsTrue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.elementId">elementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs">AiGatewayDynamicRoutingElementsOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fallback`<sup>Required</sup> <a name="fallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.fallback"></a>

```typescript
public readonly fallback: AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference">AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference</a>

---

##### `false`<sup>Required</sup> <a name="false" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.false"></a>

```typescript
public readonly false: AiGatewayDynamicRoutingElementsOutputsFalseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference">AiGatewayDynamicRoutingElementsOutputsFalseOutputReference</a>

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.next"></a>

```typescript
public readonly next: AiGatewayDynamicRoutingElementsOutputsNextOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference">AiGatewayDynamicRoutingElementsOutputsNextOutputReference</a>

---

##### `success`<sup>Required</sup> <a name="success" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.success"></a>

```typescript
public readonly success: AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference">AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference</a>

---

##### `true`<sup>Required</sup> <a name="true" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.true"></a>

```typescript
public readonly true: AiGatewayDynamicRoutingElementsOutputsTrueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference">AiGatewayDynamicRoutingElementsOutputsTrueOutputReference</a>

---

##### `elementIdInput`<sup>Optional</sup> <a name="elementIdInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.elementIdInput"></a>

```typescript
public readonly elementIdInput: string;
```

- *Type:* string

---

##### `fallbackInput`<sup>Optional</sup> <a name="fallbackInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.fallbackInput"></a>

```typescript
public readonly fallbackInput: IResolvable | AiGatewayDynamicRoutingElementsOutputsFallback;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback">AiGatewayDynamicRoutingElementsOutputsFallback</a>

---

##### `falseInput`<sup>Optional</sup> <a name="falseInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.falseInput"></a>

```typescript
public readonly falseInput: IResolvable | AiGatewayDynamicRoutingElementsOutputsFalse;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse">AiGatewayDynamicRoutingElementsOutputsFalse</a>

---

##### `nextInput`<sup>Optional</sup> <a name="nextInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.nextInput"></a>

```typescript
public readonly nextInput: IResolvable | AiGatewayDynamicRoutingElementsOutputsNext;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext">AiGatewayDynamicRoutingElementsOutputsNext</a>

---

##### `successInput`<sup>Optional</sup> <a name="successInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.successInput"></a>

```typescript
public readonly successInput: IResolvable | AiGatewayDynamicRoutingElementsOutputsSuccess;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess">AiGatewayDynamicRoutingElementsOutputsSuccess</a>

---

##### `trueInput`<sup>Optional</sup> <a name="trueInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.trueInput"></a>

```typescript
public readonly trueInput: IResolvable | AiGatewayDynamicRoutingElementsOutputsTrue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue">AiGatewayDynamicRoutingElementsOutputsTrue</a>

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayDynamicRoutingElementsOutputs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs">AiGatewayDynamicRoutingElementsOutputs</a>

---


### AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference <a name="AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

new aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.elementIdInput">elementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.elementId">elementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess">AiGatewayDynamicRoutingElementsOutputsSuccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `elementIdInput`<sup>Optional</sup> <a name="elementIdInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.elementIdInput"></a>

```typescript
public readonly elementIdInput: string;
```

- *Type:* string

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayDynamicRoutingElementsOutputsSuccess;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess">AiGatewayDynamicRoutingElementsOutputsSuccess</a>

---


### AiGatewayDynamicRoutingElementsOutputsTrueOutputReference <a name="AiGatewayDynamicRoutingElementsOutputsTrueOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

new aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.elementIdInput">elementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.elementId">elementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue">AiGatewayDynamicRoutingElementsOutputsTrue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `elementIdInput`<sup>Optional</sup> <a name="elementIdInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.elementIdInput"></a>

```typescript
public readonly elementIdInput: string;
```

- *Type:* string

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayDynamicRoutingElementsOutputsTrue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue">AiGatewayDynamicRoutingElementsOutputsTrue</a>

---


### AiGatewayDynamicRoutingElementsPropertiesOutputReference <a name="AiGatewayDynamicRoutingElementsPropertiesOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

new aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetAiGatewayDynamicRoutingProvider">resetAiGatewayDynamicRoutingProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetLimitType">resetLimitType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetWindow">resetWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAiGatewayDynamicRoutingProvider` <a name="resetAiGatewayDynamicRoutingProvider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetAiGatewayDynamicRoutingProvider"></a>

```typescript
public resetAiGatewayDynamicRoutingProvider(): void
```

##### `resetConditions` <a name="resetConditions" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetConditions"></a>

```typescript
public resetConditions(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetLimit` <a name="resetLimit" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetLimitType` <a name="resetLimitType" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetLimitType"></a>

```typescript
public resetLimitType(): void
```

##### `resetModel` <a name="resetModel" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetModel"></a>

```typescript
public resetModel(): void
```

##### `resetRetries` <a name="resetRetries" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetRetries"></a>

```typescript
public resetRetries(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetWindow` <a name="resetWindow" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetWindow"></a>

```typescript
public resetWindow(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.aiGatewayDynamicRoutingProviderInput">aiGatewayDynamicRoutingProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limitInput">limitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limitTypeInput">limitTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.retriesInput">retriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.windowInput">windowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.aiGatewayDynamicRoutingProvider">aiGatewayDynamicRoutingProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.conditions">conditions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limit">limit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limitType">limitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.window">window</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties">AiGatewayDynamicRoutingElementsProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aiGatewayDynamicRoutingProviderInput`<sup>Optional</sup> <a name="aiGatewayDynamicRoutingProviderInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.aiGatewayDynamicRoutingProviderInput"></a>

```typescript
public readonly aiGatewayDynamicRoutingProviderInput: string;
```

- *Type:* string

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limitInput"></a>

```typescript
public readonly limitInput: number;
```

- *Type:* number

---

##### `limitTypeInput`<sup>Optional</sup> <a name="limitTypeInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limitTypeInput"></a>

```typescript
public readonly limitTypeInput: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.retriesInput"></a>

```typescript
public readonly retriesInput: number;
```

- *Type:* number

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `windowInput`<sup>Optional</sup> <a name="windowInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.windowInput"></a>

```typescript
public readonly windowInput: number;
```

- *Type:* number

---

##### `aiGatewayDynamicRoutingProvider`<sup>Required</sup> <a name="aiGatewayDynamicRoutingProvider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.aiGatewayDynamicRoutingProvider"></a>

```typescript
public readonly aiGatewayDynamicRoutingProvider: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.conditions"></a>

```typescript
public readonly conditions: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

---

##### `limitType`<sup>Required</sup> <a name="limitType" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limitType"></a>

```typescript
public readonly limitType: string;
```

- *Type:* string

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.window"></a>

```typescript
public readonly window: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayDynamicRoutingElementsProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties">AiGatewayDynamicRoutingElementsProperties</a>

---


### AiGatewayDynamicRoutingRouteDeploymentOutputReference <a name="AiGatewayDynamicRoutingRouteDeploymentOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

new aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeployment">AiGatewayDynamicRoutingRouteDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiGatewayDynamicRoutingRouteDeployment;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeployment">AiGatewayDynamicRoutingRouteDeployment</a>

---


### AiGatewayDynamicRoutingRouteElementsList <a name="AiGatewayDynamicRoutingRouteElementsList" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

new aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.get"></a>

```typescript
public get(index: number): AiGatewayDynamicRoutingRouteElementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### AiGatewayDynamicRoutingRouteElementsOutputReference <a name="AiGatewayDynamicRoutingRouteElementsOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

new aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference">AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElements">AiGatewayDynamicRoutingRouteElements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.outputs"></a>

```typescript
public readonly outputs: AiGatewayDynamicRoutingRouteElementsOutputsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsOutputReference</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.properties"></a>

```typescript
public readonly properties: AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference">AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiGatewayDynamicRoutingRouteElements;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElements">AiGatewayDynamicRoutingRouteElements</a>

---


### AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference <a name="AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

new aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.elementId">elementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallback">AiGatewayDynamicRoutingRouteElementsOutputsFallback</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiGatewayDynamicRoutingRouteElementsOutputsFallback;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallback">AiGatewayDynamicRoutingRouteElementsOutputsFallback</a>

---


### AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference <a name="AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

new aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.elementId">elementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalse">AiGatewayDynamicRoutingRouteElementsOutputsFalse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiGatewayDynamicRoutingRouteElementsOutputsFalse;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalse">AiGatewayDynamicRoutingRouteElementsOutputsFalse</a>

---


### AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference <a name="AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

new aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.elementId">elementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNext">AiGatewayDynamicRoutingRouteElementsOutputsNext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiGatewayDynamicRoutingRouteElementsOutputsNext;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNext">AiGatewayDynamicRoutingRouteElementsOutputsNext</a>

---


### AiGatewayDynamicRoutingRouteElementsOutputsOutputReference <a name="AiGatewayDynamicRoutingRouteElementsOutputsOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

new aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.elementId">elementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.fallback">fallback</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.false">false</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.next">next</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.success">success</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.true">true</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputs">AiGatewayDynamicRoutingRouteElementsOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

---

##### `fallback`<sup>Required</sup> <a name="fallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.fallback"></a>

```typescript
public readonly fallback: AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference</a>

---

##### `false`<sup>Required</sup> <a name="false" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.false"></a>

```typescript
public readonly false: AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference</a>

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.next"></a>

```typescript
public readonly next: AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference</a>

---

##### `success`<sup>Required</sup> <a name="success" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.success"></a>

```typescript
public readonly success: AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference</a>

---

##### `true`<sup>Required</sup> <a name="true" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.true"></a>

```typescript
public readonly true: AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiGatewayDynamicRoutingRouteElementsOutputs;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputs">AiGatewayDynamicRoutingRouteElementsOutputs</a>

---


### AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference <a name="AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

new aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.elementId">elementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccess">AiGatewayDynamicRoutingRouteElementsOutputsSuccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiGatewayDynamicRoutingRouteElementsOutputsSuccess;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccess">AiGatewayDynamicRoutingRouteElementsOutputsSuccess</a>

---


### AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference <a name="AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

new aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.elementId">elementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrue">AiGatewayDynamicRoutingRouteElementsOutputsTrue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiGatewayDynamicRoutingRouteElementsOutputsTrue;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrue">AiGatewayDynamicRoutingRouteElementsOutputsTrue</a>

---


### AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference <a name="AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

new aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.aiGatewayDynamicRoutingProvider">aiGatewayDynamicRoutingProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.conditions">conditions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.limit">limit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.limitType">limitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.window">window</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsProperties">AiGatewayDynamicRoutingRouteElementsProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aiGatewayDynamicRoutingProvider`<sup>Required</sup> <a name="aiGatewayDynamicRoutingProvider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.aiGatewayDynamicRoutingProvider"></a>

```typescript
public readonly aiGatewayDynamicRoutingProvider: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.conditions"></a>

```typescript
public readonly conditions: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

---

##### `limitType`<sup>Required</sup> <a name="limitType" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.limitType"></a>

```typescript
public readonly limitType: string;
```

- *Type:* string

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.window"></a>

```typescript
public readonly window: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiGatewayDynamicRoutingRouteElementsProperties;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsProperties">AiGatewayDynamicRoutingRouteElementsProperties</a>

---


### AiGatewayDynamicRoutingRouteOutputReference <a name="AiGatewayDynamicRoutingRouteOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

new aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.accountTag">accountTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.deployment">deployment</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference">AiGatewayDynamicRoutingRouteDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.elements">elements</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList">AiGatewayDynamicRoutingRouteElementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.version">version</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference">AiGatewayDynamicRoutingRouteVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRoute">AiGatewayDynamicRoutingRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountTag`<sup>Required</sup> <a name="accountTag" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.accountTag"></a>

```typescript
public readonly accountTag: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.deployment"></a>

```typescript
public readonly deployment: AiGatewayDynamicRoutingRouteDeploymentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference">AiGatewayDynamicRoutingRouteDeploymentOutputReference</a>

---

##### `elements`<sup>Required</sup> <a name="elements" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.elements"></a>

```typescript
public readonly elements: AiGatewayDynamicRoutingRouteElementsList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList">AiGatewayDynamicRoutingRouteElementsList</a>

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.version"></a>

```typescript
public readonly version: AiGatewayDynamicRoutingRouteVersionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference">AiGatewayDynamicRoutingRouteVersionOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiGatewayDynamicRoutingRoute;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRoute">AiGatewayDynamicRoutingRoute</a>

---


### AiGatewayDynamicRoutingRouteVersionOutputReference <a name="AiGatewayDynamicRoutingRouteVersionOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

new aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.active">active</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.isValid">isValid</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersion">AiGatewayDynamicRoutingRouteVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.active"></a>

```typescript
public readonly active: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `isValid`<sup>Required</sup> <a name="isValid" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.isValid"></a>

```typescript
public readonly isValid: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiGatewayDynamicRoutingRouteVersion;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersion">AiGatewayDynamicRoutingRouteVersion</a>

---


### AiGatewayDynamicRoutingVersionOutputReference <a name="AiGatewayDynamicRoutingVersionOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.Initializer"></a>

```typescript
import { aiGatewayDynamicRouting } from '@cdktn/provider-cloudflare'

new aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.active">active</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.isValid">isValid</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersion">AiGatewayDynamicRoutingVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.active"></a>

```typescript
public readonly active: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `isValid`<sup>Required</sup> <a name="isValid" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.isValid"></a>

```typescript
public readonly isValid: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiGatewayDynamicRoutingVersion;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersion">AiGatewayDynamicRoutingVersion</a>

---



