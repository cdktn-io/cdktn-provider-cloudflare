# `magicTransitCf1Site` Submodule <a name="`magicTransitCf1Site` Submodule" id="@cdktn/provider-cloudflare.magicTransitCf1Site"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicTransitCf1Site <a name="MagicTransitCf1Site" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site cloudflare_magic_transit_cf1_site}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer"></a>

```typescript
import { magicTransitCf1Site } from '@cdktn/provider-cloudflare'

new magicTransitCf1Site.MagicTransitCf1Site(scope: Construct, id: string, config: MagicTransitCf1SiteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig">MagicTransitCf1SiteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig">MagicTransitCf1SiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putBody">putBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putLocation">putLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBody` <a name="putBody" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putBody"></a>

```typescript
public putBody(value: IResolvable | MagicTransitCf1SiteBody[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putBody.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>[]

---

##### `putLocation` <a name="putLocation" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putLocation"></a>

```typescript
public putLocation(value: MagicTransitCf1SiteLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MagicTransitCf1Site resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isConstruct"></a>

```typescript
import { magicTransitCf1Site } from '@cdktn/provider-cloudflare'

magicTransitCf1Site.MagicTransitCf1Site.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformElement"></a>

```typescript
import { magicTransitCf1Site } from '@cdktn/provider-cloudflare'

magicTransitCf1Site.MagicTransitCf1Site.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformResource"></a>

```typescript
import { magicTransitCf1Site } from '@cdktn/provider-cloudflare'

magicTransitCf1Site.MagicTransitCf1Site.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport"></a>

```typescript
import { magicTransitCf1Site } from '@cdktn/provider-cloudflare'

magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MagicTransitCf1Site resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MagicTransitCf1Site to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MagicTransitCf1Site that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MagicTransitCf1Site to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.body">body</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList">MagicTransitCf1SiteBodyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.location">location</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference">MagicTransitCf1SiteLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.bodyInput">bodyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.locationInput">locationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.body"></a>

```typescript
public readonly body: MagicTransitCf1SiteBodyList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList">MagicTransitCf1SiteBodyList</a>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.location"></a>

```typescript
public readonly location: MagicTransitCf1SiteLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference">MagicTransitCf1SiteLocationOutputReference</a>

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.bodyInput"></a>

```typescript
public readonly bodyInput: IResolvable | MagicTransitCf1SiteBody[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.locationInput"></a>

```typescript
public readonly locationInput: IResolvable | MagicTransitCf1SiteLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MagicTransitCf1SiteBody <a name="MagicTransitCf1SiteBody" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.Initializer"></a>

```typescript
import { magicTransitCf1Site } from '@cdktn/provider-cloudflare'

const magicTransitCf1SiteBody: magicTransitCf1Site.MagicTransitCf1SiteBody = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.name">name</a></code> | <code>string</code> | A human-provided name describing the CF1 Site that should be unique within the account. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.description">description</a></code> | <code>string</code> | A human-provided description of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.location">location</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#location MagicTransitCf1Site#location}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A human-provided name describing the CF1 Site that should be unique within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#name MagicTransitCf1Site#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-provided description of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#description MagicTransitCf1Site#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.location"></a>

```typescript
public readonly location: MagicTransitCf1SiteBodyLocation;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#location MagicTransitCf1Site#location}.

---

### MagicTransitCf1SiteBodyLocation <a name="MagicTransitCf1SiteBodyLocation" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.Initializer"></a>

```typescript
import { magicTransitCf1Site } from '@cdktn/provider-cloudflare'

const magicTransitCf1SiteBodyLocation: magicTransitCf1Site.MagicTransitCf1SiteBodyLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.lat">lat</a></code> | <code>number</code> | Latitude of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.long">long</a></code> | <code>number</code> | Longitude of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.name">name</a></code> | <code>string</code> | Name of nearest town, city, or village. |

---

##### `lat`<sup>Optional</sup> <a name="lat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.lat"></a>

```typescript
public readonly lat: number;
```

- *Type:* number

Latitude of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#lat MagicTransitCf1Site#lat}

---

##### `long`<sup>Optional</sup> <a name="long" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.long"></a>

```typescript
public readonly long: number;
```

- *Type:* number

Longitude of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#long MagicTransitCf1Site#long}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of nearest town, city, or village.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#name MagicTransitCf1Site#name}

---

### MagicTransitCf1SiteConfig <a name="MagicTransitCf1SiteConfig" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.Initializer"></a>

```typescript
import { magicTransitCf1Site } from '@cdktn/provider-cloudflare'

const magicTransitCf1SiteConfig: magicTransitCf1Site.MagicTransitCf1SiteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.body">body</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#body MagicTransitCf1Site#body}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.description">description</a></code> | <code>string</code> | A human-provided description of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.location">location</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#location MagicTransitCf1Site#location}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.name">name</a></code> | <code>string</code> | A human-provided name describing the CF1 Site that should be unique within the account. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#account_id MagicTransitCf1Site#account_id}

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.body"></a>

```typescript
public readonly body: IResolvable | MagicTransitCf1SiteBody[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#body MagicTransitCf1Site#body}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-provided description of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#description MagicTransitCf1Site#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.location"></a>

```typescript
public readonly location: MagicTransitCf1SiteLocation;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#location MagicTransitCf1Site#location}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A human-provided name describing the CF1 Site that should be unique within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#name MagicTransitCf1Site#name}

---

### MagicTransitCf1SiteLocation <a name="MagicTransitCf1SiteLocation" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.Initializer"></a>

```typescript
import { magicTransitCf1Site } from '@cdktn/provider-cloudflare'

const magicTransitCf1SiteLocation: magicTransitCf1Site.MagicTransitCf1SiteLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.lat">lat</a></code> | <code>number</code> | Latitude of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.long">long</a></code> | <code>number</code> | Longitude of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.name">name</a></code> | <code>string</code> | Name of nearest town, city, or village. |

---

##### `lat`<sup>Optional</sup> <a name="lat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.lat"></a>

```typescript
public readonly lat: number;
```

- *Type:* number

Latitude of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#lat MagicTransitCf1Site#lat}

---

##### `long`<sup>Optional</sup> <a name="long" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.long"></a>

```typescript
public readonly long: number;
```

- *Type:* number

Longitude of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#long MagicTransitCf1Site#long}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of nearest town, city, or village.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#name MagicTransitCf1Site#name}

---

## Classes <a name="Classes" id="Classes"></a>

### MagicTransitCf1SiteBodyList <a name="MagicTransitCf1SiteBodyList" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer"></a>

```typescript
import { magicTransitCf1Site } from '@cdktn/provider-cloudflare'

new magicTransitCf1Site.MagicTransitCf1SiteBodyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.get"></a>

```typescript
public get(index: number): MagicTransitCf1SiteBodyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MagicTransitCf1SiteBody[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>[]

---


### MagicTransitCf1SiteBodyLocationOutputReference <a name="MagicTransitCf1SiteBodyLocationOutputReference" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.Initializer"></a>

```typescript
import { magicTransitCf1Site } from '@cdktn/provider-cloudflare'

new magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetLat">resetLat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetLong">resetLong</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLat` <a name="resetLat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetLat"></a>

```typescript
public resetLat(): void
```

##### `resetLong` <a name="resetLong" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetLong"></a>

```typescript
public resetLong(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.latInput">latInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.longInput">longInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.lat">lat</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.long">long</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `latInput`<sup>Optional</sup> <a name="latInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.latInput"></a>

```typescript
public readonly latInput: number;
```

- *Type:* number

---

##### `longInput`<sup>Optional</sup> <a name="longInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.longInput"></a>

```typescript
public readonly longInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `lat`<sup>Required</sup> <a name="lat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.lat"></a>

```typescript
public readonly lat: number;
```

- *Type:* number

---

##### `long`<sup>Required</sup> <a name="long" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.long"></a>

```typescript
public readonly long: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MagicTransitCf1SiteBodyLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a>

---


### MagicTransitCf1SiteBodyOutputReference <a name="MagicTransitCf1SiteBodyOutputReference" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer"></a>

```typescript
import { magicTransitCf1Site } from '@cdktn/provider-cloudflare'

new magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.putLocation">putLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resetLocation">resetLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocation` <a name="putLocation" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.putLocation"></a>

```typescript
public putLocation(value: MagicTransitCf1SiteBodyLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.location">location</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference">MagicTransitCf1SiteBodyLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.locationInput">locationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.location"></a>

```typescript
public readonly location: MagicTransitCf1SiteBodyLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference">MagicTransitCf1SiteBodyLocationOutputReference</a>

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: IResolvable | MagicTransitCf1SiteBodyLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MagicTransitCf1SiteBody;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>

---


### MagicTransitCf1SiteLocationOutputReference <a name="MagicTransitCf1SiteLocationOutputReference" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.Initializer"></a>

```typescript
import { magicTransitCf1Site } from '@cdktn/provider-cloudflare'

new magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetLat">resetLat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetLong">resetLong</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLat` <a name="resetLat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetLat"></a>

```typescript
public resetLat(): void
```

##### `resetLong` <a name="resetLong" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetLong"></a>

```typescript
public resetLong(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.latInput">latInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.longInput">longInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.lat">lat</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.long">long</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `latInput`<sup>Optional</sup> <a name="latInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.latInput"></a>

```typescript
public readonly latInput: number;
```

- *Type:* number

---

##### `longInput`<sup>Optional</sup> <a name="longInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.longInput"></a>

```typescript
public readonly longInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `lat`<sup>Required</sup> <a name="lat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.lat"></a>

```typescript
public readonly lat: number;
```

- *Type:* number

---

##### `long`<sup>Required</sup> <a name="long" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.long"></a>

```typescript
public readonly long: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MagicTransitCf1SiteLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a>

---



