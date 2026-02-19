# `magicTransitSiteLan` Submodule <a name="`magicTransitSiteLan` Submodule" id="@cdktn/provider-cloudflare.magicTransitSiteLan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicTransitSiteLan <a name="MagicTransitSiteLan" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan cloudflare_magic_transit_site_lan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer"></a>

```typescript
import { magicTransitSiteLan } from '@cdktn/provider-cloudflare'

new magicTransitSiteLan.MagicTransitSiteLan(scope: Construct, id: string, config: MagicTransitSiteLanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig">MagicTransitSiteLanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig">MagicTransitSiteLanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putNat">putNat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putRoutedSubnets">putRoutedSubnets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putStaticAddressing">putStaticAddressing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetBondId">resetBondId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetHaLink">resetHaLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetNat">resetNat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetPhysport">resetPhysport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetRoutedSubnets">resetRoutedSubnets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetStaticAddressing">resetStaticAddressing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetVlanTag">resetVlanTag</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNat` <a name="putNat" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putNat"></a>

```typescript
public putNat(value: MagicTransitSiteLanNat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putNat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat">MagicTransitSiteLanNat</a>

---

##### `putRoutedSubnets` <a name="putRoutedSubnets" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putRoutedSubnets"></a>

```typescript
public putRoutedSubnets(value: IResolvable | MagicTransitSiteLanRoutedSubnets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putRoutedSubnets.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets">MagicTransitSiteLanRoutedSubnets</a>[]

---

##### `putStaticAddressing` <a name="putStaticAddressing" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putStaticAddressing"></a>

```typescript
public putStaticAddressing(value: MagicTransitSiteLanStaticAddressing): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putStaticAddressing.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing">MagicTransitSiteLanStaticAddressing</a>

---

##### `resetBondId` <a name="resetBondId" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetBondId"></a>

```typescript
public resetBondId(): void
```

##### `resetHaLink` <a name="resetHaLink" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetHaLink"></a>

```typescript
public resetHaLink(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNat` <a name="resetNat" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetNat"></a>

```typescript
public resetNat(): void
```

##### `resetPhysport` <a name="resetPhysport" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetPhysport"></a>

```typescript
public resetPhysport(): void
```

##### `resetRoutedSubnets` <a name="resetRoutedSubnets" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetRoutedSubnets"></a>

```typescript
public resetRoutedSubnets(): void
```

##### `resetStaticAddressing` <a name="resetStaticAddressing" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetStaticAddressing"></a>

```typescript
public resetStaticAddressing(): void
```

##### `resetVlanTag` <a name="resetVlanTag" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetVlanTag"></a>

```typescript
public resetVlanTag(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MagicTransitSiteLan resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isConstruct"></a>

```typescript
import { magicTransitSiteLan } from '@cdktn/provider-cloudflare'

magicTransitSiteLan.MagicTransitSiteLan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isTerraformElement"></a>

```typescript
import { magicTransitSiteLan } from '@cdktn/provider-cloudflare'

magicTransitSiteLan.MagicTransitSiteLan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isTerraformResource"></a>

```typescript
import { magicTransitSiteLan } from '@cdktn/provider-cloudflare'

magicTransitSiteLan.MagicTransitSiteLan.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.generateConfigForImport"></a>

```typescript
import { magicTransitSiteLan } from '@cdktn/provider-cloudflare'

magicTransitSiteLan.MagicTransitSiteLan.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MagicTransitSiteLan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MagicTransitSiteLan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MagicTransitSiteLan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MagicTransitSiteLan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.nat">nat</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference">MagicTransitSiteLanNatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.routedSubnets">routedSubnets</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList">MagicTransitSiteLanRoutedSubnetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.staticAddressing">staticAddressing</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference">MagicTransitSiteLanStaticAddressingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.bondIdInput">bondIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.haLinkInput">haLinkInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.natInput">natInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat">MagicTransitSiteLanNat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.physportInput">physportInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.routedSubnetsInput">routedSubnetsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets">MagicTransitSiteLanRoutedSubnets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.siteIdInput">siteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.staticAddressingInput">staticAddressingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing">MagicTransitSiteLanStaticAddressing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.vlanTagInput">vlanTagInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.bondId">bondId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.haLink">haLink</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.physport">physport</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.siteId">siteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.vlanTag">vlanTag</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nat`<sup>Required</sup> <a name="nat" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.nat"></a>

```typescript
public readonly nat: MagicTransitSiteLanNatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference">MagicTransitSiteLanNatOutputReference</a>

---

##### `routedSubnets`<sup>Required</sup> <a name="routedSubnets" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.routedSubnets"></a>

```typescript
public readonly routedSubnets: MagicTransitSiteLanRoutedSubnetsList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList">MagicTransitSiteLanRoutedSubnetsList</a>

---

##### `staticAddressing`<sup>Required</sup> <a name="staticAddressing" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.staticAddressing"></a>

```typescript
public readonly staticAddressing: MagicTransitSiteLanStaticAddressingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference">MagicTransitSiteLanStaticAddressingOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `bondIdInput`<sup>Optional</sup> <a name="bondIdInput" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.bondIdInput"></a>

```typescript
public readonly bondIdInput: number;
```

- *Type:* number

---

##### `haLinkInput`<sup>Optional</sup> <a name="haLinkInput" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.haLinkInput"></a>

```typescript
public readonly haLinkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `natInput`<sup>Optional</sup> <a name="natInput" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.natInput"></a>

```typescript
public readonly natInput: IResolvable | MagicTransitSiteLanNat;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat">MagicTransitSiteLanNat</a>

---

##### `physportInput`<sup>Optional</sup> <a name="physportInput" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.physportInput"></a>

```typescript
public readonly physportInput: number;
```

- *Type:* number

---

##### `routedSubnetsInput`<sup>Optional</sup> <a name="routedSubnetsInput" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.routedSubnetsInput"></a>

```typescript
public readonly routedSubnetsInput: IResolvable | MagicTransitSiteLanRoutedSubnets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets">MagicTransitSiteLanRoutedSubnets</a>[]

---

##### `siteIdInput`<sup>Optional</sup> <a name="siteIdInput" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.siteIdInput"></a>

```typescript
public readonly siteIdInput: string;
```

- *Type:* string

---

##### `staticAddressingInput`<sup>Optional</sup> <a name="staticAddressingInput" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.staticAddressingInput"></a>

```typescript
public readonly staticAddressingInput: IResolvable | MagicTransitSiteLanStaticAddressing;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing">MagicTransitSiteLanStaticAddressing</a>

---

##### `vlanTagInput`<sup>Optional</sup> <a name="vlanTagInput" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.vlanTagInput"></a>

```typescript
public readonly vlanTagInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `bondId`<sup>Required</sup> <a name="bondId" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.bondId"></a>

```typescript
public readonly bondId: number;
```

- *Type:* number

---

##### `haLink`<sup>Required</sup> <a name="haLink" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.haLink"></a>

```typescript
public readonly haLink: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `physport`<sup>Required</sup> <a name="physport" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.physport"></a>

```typescript
public readonly physport: number;
```

- *Type:* number

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

---

##### `vlanTag`<sup>Required</sup> <a name="vlanTag" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.vlanTag"></a>

```typescript
public readonly vlanTag: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MagicTransitSiteLanConfig <a name="MagicTransitSiteLanConfig" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.Initializer"></a>

```typescript
import { magicTransitSiteLan } from '@cdktn/provider-cloudflare'

const magicTransitSiteLanConfig: magicTransitSiteLan.MagicTransitSiteLanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.siteId">siteId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.bondId">bondId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#bond_id MagicTransitSiteLan#bond_id}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.haLink">haLink</a></code> | <code>boolean \| cdktn.IResolvable</code> | mark true to use this LAN for HA probing. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#name MagicTransitSiteLan#name}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.nat">nat</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat">MagicTransitSiteLanNat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#nat MagicTransitSiteLan#nat}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.physport">physport</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#physport MagicTransitSiteLan#physport}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.routedSubnets">routedSubnets</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets">MagicTransitSiteLanRoutedSubnets</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#routed_subnets MagicTransitSiteLan#routed_subnets}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.staticAddressing">staticAddressing</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing">MagicTransitSiteLanStaticAddressing</a></code> | If the site is not configured in high availability mode, this configuration is optional (if omitted, use DHCP). |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.vlanTag">vlanTag</a></code> | <code>number</code> | VLAN ID. Use zero for untagged. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#account_id MagicTransitSiteLan#account_id}

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#site_id MagicTransitSiteLan#site_id}

---

##### `bondId`<sup>Optional</sup> <a name="bondId" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.bondId"></a>

```typescript
public readonly bondId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#bond_id MagicTransitSiteLan#bond_id}.

---

##### `haLink`<sup>Optional</sup> <a name="haLink" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.haLink"></a>

```typescript
public readonly haLink: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

mark true to use this LAN for HA probing.

only works for site with HA turned on. only one LAN can be set as the ha_link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#ha_link MagicTransitSiteLan#ha_link}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#name MagicTransitSiteLan#name}.

---

##### `nat`<sup>Optional</sup> <a name="nat" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.nat"></a>

```typescript
public readonly nat: MagicTransitSiteLanNat;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat">MagicTransitSiteLanNat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#nat MagicTransitSiteLan#nat}.

---

##### `physport`<sup>Optional</sup> <a name="physport" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.physport"></a>

```typescript
public readonly physport: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#physport MagicTransitSiteLan#physport}.

---

##### `routedSubnets`<sup>Optional</sup> <a name="routedSubnets" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.routedSubnets"></a>

```typescript
public readonly routedSubnets: IResolvable | MagicTransitSiteLanRoutedSubnets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets">MagicTransitSiteLanRoutedSubnets</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#routed_subnets MagicTransitSiteLan#routed_subnets}.

---

##### `staticAddressing`<sup>Optional</sup> <a name="staticAddressing" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.staticAddressing"></a>

```typescript
public readonly staticAddressing: MagicTransitSiteLanStaticAddressing;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing">MagicTransitSiteLanStaticAddressing</a>

If the site is not configured in high availability mode, this configuration is optional (if omitted, use DHCP).

However, if in high availability mode, static_address is required along with secondary and virtual address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#static_addressing MagicTransitSiteLan#static_addressing}

---

##### `vlanTag`<sup>Optional</sup> <a name="vlanTag" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.vlanTag"></a>

```typescript
public readonly vlanTag: number;
```

- *Type:* number

VLAN ID. Use zero for untagged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#vlan_tag MagicTransitSiteLan#vlan_tag}

---

### MagicTransitSiteLanNat <a name="MagicTransitSiteLanNat" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat.Initializer"></a>

```typescript
import { magicTransitSiteLan } from '@cdktn/provider-cloudflare'

const magicTransitSiteLanNat: magicTransitSiteLan.MagicTransitSiteLanNat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat.property.staticPrefix">staticPrefix</a></code> | <code>string</code> | A valid CIDR notation representing an IP range. |

---

##### `staticPrefix`<sup>Optional</sup> <a name="staticPrefix" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat.property.staticPrefix"></a>

```typescript
public readonly staticPrefix: string;
```

- *Type:* string

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#static_prefix MagicTransitSiteLan#static_prefix}

---

### MagicTransitSiteLanRoutedSubnets <a name="MagicTransitSiteLanRoutedSubnets" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets.Initializer"></a>

```typescript
import { magicTransitSiteLan } from '@cdktn/provider-cloudflare'

const magicTransitSiteLanRoutedSubnets: magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets.property.nextHop">nextHop</a></code> | <code>string</code> | A valid IPv4 address. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets.property.prefix">prefix</a></code> | <code>string</code> | A valid CIDR notation representing an IP range. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets.property.nat">nat</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat">MagicTransitSiteLanRoutedSubnetsNat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#nat MagicTransitSiteLan#nat}. |

---

##### `nextHop`<sup>Required</sup> <a name="nextHop" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets.property.nextHop"></a>

```typescript
public readonly nextHop: string;
```

- *Type:* string

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#next_hop MagicTransitSiteLan#next_hop}

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#prefix MagicTransitSiteLan#prefix}

---

##### `nat`<sup>Optional</sup> <a name="nat" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets.property.nat"></a>

```typescript
public readonly nat: MagicTransitSiteLanRoutedSubnetsNat;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat">MagicTransitSiteLanRoutedSubnetsNat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#nat MagicTransitSiteLan#nat}.

---

### MagicTransitSiteLanRoutedSubnetsNat <a name="MagicTransitSiteLanRoutedSubnetsNat" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat.Initializer"></a>

```typescript
import { magicTransitSiteLan } from '@cdktn/provider-cloudflare'

const magicTransitSiteLanRoutedSubnetsNat: magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat.property.staticPrefix">staticPrefix</a></code> | <code>string</code> | A valid CIDR notation representing an IP range. |

---

##### `staticPrefix`<sup>Optional</sup> <a name="staticPrefix" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat.property.staticPrefix"></a>

```typescript
public readonly staticPrefix: string;
```

- *Type:* string

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#static_prefix MagicTransitSiteLan#static_prefix}

---

### MagicTransitSiteLanStaticAddressing <a name="MagicTransitSiteLanStaticAddressing" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.Initializer"></a>

```typescript
import { magicTransitSiteLan } from '@cdktn/provider-cloudflare'

const magicTransitSiteLanStaticAddressing: magicTransitSiteLan.MagicTransitSiteLanStaticAddressing = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.address">address</a></code> | <code>string</code> | A valid CIDR notation representing an IP range. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.dhcpRelay">dhcpRelay</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay">MagicTransitSiteLanStaticAddressingDhcpRelay</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#dhcp_relay MagicTransitSiteLan#dhcp_relay}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.dhcpServer">dhcpServer</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer">MagicTransitSiteLanStaticAddressingDhcpServer</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#dhcp_server MagicTransitSiteLan#dhcp_server}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.secondaryAddress">secondaryAddress</a></code> | <code>string</code> | A valid CIDR notation representing an IP range. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.virtualAddress">virtualAddress</a></code> | <code>string</code> | A valid CIDR notation representing an IP range. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#address MagicTransitSiteLan#address}

---

##### `dhcpRelay`<sup>Optional</sup> <a name="dhcpRelay" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.dhcpRelay"></a>

```typescript
public readonly dhcpRelay: MagicTransitSiteLanStaticAddressingDhcpRelay;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay">MagicTransitSiteLanStaticAddressingDhcpRelay</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#dhcp_relay MagicTransitSiteLan#dhcp_relay}.

---

##### `dhcpServer`<sup>Optional</sup> <a name="dhcpServer" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.dhcpServer"></a>

```typescript
public readonly dhcpServer: MagicTransitSiteLanStaticAddressingDhcpServer;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer">MagicTransitSiteLanStaticAddressingDhcpServer</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#dhcp_server MagicTransitSiteLan#dhcp_server}.

---

##### `secondaryAddress`<sup>Optional</sup> <a name="secondaryAddress" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.secondaryAddress"></a>

```typescript
public readonly secondaryAddress: string;
```

- *Type:* string

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#secondary_address MagicTransitSiteLan#secondary_address}

---

##### `virtualAddress`<sup>Optional</sup> <a name="virtualAddress" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.virtualAddress"></a>

```typescript
public readonly virtualAddress: string;
```

- *Type:* string

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#virtual_address MagicTransitSiteLan#virtual_address}

---

### MagicTransitSiteLanStaticAddressingDhcpRelay <a name="MagicTransitSiteLanStaticAddressingDhcpRelay" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay.Initializer"></a>

```typescript
import { magicTransitSiteLan } from '@cdktn/provider-cloudflare'

const magicTransitSiteLanStaticAddressingDhcpRelay: magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay.property.serverAddresses">serverAddresses</a></code> | <code>string[]</code> | List of DHCP server IPs. |

---

##### `serverAddresses`<sup>Optional</sup> <a name="serverAddresses" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay.property.serverAddresses"></a>

```typescript
public readonly serverAddresses: string[];
```

- *Type:* string[]

List of DHCP server IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#server_addresses MagicTransitSiteLan#server_addresses}

---

### MagicTransitSiteLanStaticAddressingDhcpServer <a name="MagicTransitSiteLanStaticAddressingDhcpServer" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.Initializer"></a>

```typescript
import { magicTransitSiteLan } from '@cdktn/provider-cloudflare'

const magicTransitSiteLanStaticAddressingDhcpServer: magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dhcpPoolEnd">dhcpPoolEnd</a></code> | <code>string</code> | A valid IPv4 address. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dhcpPoolStart">dhcpPoolStart</a></code> | <code>string</code> | A valid IPv4 address. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dnsServer">dnsServer</a></code> | <code>string</code> | A valid IPv4 address. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dnsServers">dnsServers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#dns_servers MagicTransitSiteLan#dns_servers}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.reservations">reservations</a></code> | <code>{[ key: string ]: string}</code> | Mapping of MAC addresses to IP addresses. |

---

##### `dhcpPoolEnd`<sup>Optional</sup> <a name="dhcpPoolEnd" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dhcpPoolEnd"></a>

```typescript
public readonly dhcpPoolEnd: string;
```

- *Type:* string

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#dhcp_pool_end MagicTransitSiteLan#dhcp_pool_end}

---

##### `dhcpPoolStart`<sup>Optional</sup> <a name="dhcpPoolStart" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dhcpPoolStart"></a>

```typescript
public readonly dhcpPoolStart: string;
```

- *Type:* string

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#dhcp_pool_start MagicTransitSiteLan#dhcp_pool_start}

---

##### `dnsServer`<sup>Optional</sup> <a name="dnsServer" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dnsServer"></a>

```typescript
public readonly dnsServer: string;
```

- *Type:* string

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#dns_server MagicTransitSiteLan#dns_server}

---

##### `dnsServers`<sup>Optional</sup> <a name="dnsServers" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dnsServers"></a>

```typescript
public readonly dnsServers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#dns_servers MagicTransitSiteLan#dns_servers}.

---

##### `reservations`<sup>Optional</sup> <a name="reservations" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.reservations"></a>

```typescript
public readonly reservations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Mapping of MAC addresses to IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_transit_site_lan#reservations MagicTransitSiteLan#reservations}

---

## Classes <a name="Classes" id="Classes"></a>

### MagicTransitSiteLanNatOutputReference <a name="MagicTransitSiteLanNatOutputReference" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.Initializer"></a>

```typescript
import { magicTransitSiteLan } from '@cdktn/provider-cloudflare'

new magicTransitSiteLan.MagicTransitSiteLanNatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.resetStaticPrefix">resetStaticPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStaticPrefix` <a name="resetStaticPrefix" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.resetStaticPrefix"></a>

```typescript
public resetStaticPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.staticPrefixInput">staticPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.staticPrefix">staticPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat">MagicTransitSiteLanNat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `staticPrefixInput`<sup>Optional</sup> <a name="staticPrefixInput" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.staticPrefixInput"></a>

```typescript
public readonly staticPrefixInput: string;
```

- *Type:* string

---

##### `staticPrefix`<sup>Required</sup> <a name="staticPrefix" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.staticPrefix"></a>

```typescript
public readonly staticPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MagicTransitSiteLanNat;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat">MagicTransitSiteLanNat</a>

---


### MagicTransitSiteLanRoutedSubnetsList <a name="MagicTransitSiteLanRoutedSubnetsList" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.Initializer"></a>

```typescript
import { magicTransitSiteLan } from '@cdktn/provider-cloudflare'

new magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.get"></a>

```typescript
public get(index: number): MagicTransitSiteLanRoutedSubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets">MagicTransitSiteLanRoutedSubnets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MagicTransitSiteLanRoutedSubnets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets">MagicTransitSiteLanRoutedSubnets</a>[]

---


### MagicTransitSiteLanRoutedSubnetsNatOutputReference <a name="MagicTransitSiteLanRoutedSubnetsNatOutputReference" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer"></a>

```typescript
import { magicTransitSiteLan } from '@cdktn/provider-cloudflare'

new magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.resetStaticPrefix">resetStaticPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStaticPrefix` <a name="resetStaticPrefix" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.resetStaticPrefix"></a>

```typescript
public resetStaticPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.staticPrefixInput">staticPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.staticPrefix">staticPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat">MagicTransitSiteLanRoutedSubnetsNat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `staticPrefixInput`<sup>Optional</sup> <a name="staticPrefixInput" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.staticPrefixInput"></a>

```typescript
public readonly staticPrefixInput: string;
```

- *Type:* string

---

##### `staticPrefix`<sup>Required</sup> <a name="staticPrefix" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.staticPrefix"></a>

```typescript
public readonly staticPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MagicTransitSiteLanRoutedSubnetsNat;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat">MagicTransitSiteLanRoutedSubnetsNat</a>

---


### MagicTransitSiteLanRoutedSubnetsOutputReference <a name="MagicTransitSiteLanRoutedSubnetsOutputReference" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer"></a>

```typescript
import { magicTransitSiteLan } from '@cdktn/provider-cloudflare'

new magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.putNat">putNat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.resetNat">resetNat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNat` <a name="putNat" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.putNat"></a>

```typescript
public putNat(value: MagicTransitSiteLanRoutedSubnetsNat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.putNat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat">MagicTransitSiteLanRoutedSubnetsNat</a>

---

##### `resetNat` <a name="resetNat" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.resetNat"></a>

```typescript
public resetNat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.nat">nat</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference">MagicTransitSiteLanRoutedSubnetsNatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.natInput">natInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat">MagicTransitSiteLanRoutedSubnetsNat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.nextHopInput">nextHopInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.nextHop">nextHop</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets">MagicTransitSiteLanRoutedSubnets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nat`<sup>Required</sup> <a name="nat" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.nat"></a>

```typescript
public readonly nat: MagicTransitSiteLanRoutedSubnetsNatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference">MagicTransitSiteLanRoutedSubnetsNatOutputReference</a>

---

##### `natInput`<sup>Optional</sup> <a name="natInput" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.natInput"></a>

```typescript
public readonly natInput: IResolvable | MagicTransitSiteLanRoutedSubnetsNat;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat">MagicTransitSiteLanRoutedSubnetsNat</a>

---

##### `nextHopInput`<sup>Optional</sup> <a name="nextHopInput" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.nextHopInput"></a>

```typescript
public readonly nextHopInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `nextHop`<sup>Required</sup> <a name="nextHop" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.nextHop"></a>

```typescript
public readonly nextHop: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MagicTransitSiteLanRoutedSubnets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets">MagicTransitSiteLanRoutedSubnets</a>

---


### MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference <a name="MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer"></a>

```typescript
import { magicTransitSiteLan } from '@cdktn/provider-cloudflare'

new magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.resetServerAddresses">resetServerAddresses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServerAddresses` <a name="resetServerAddresses" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.resetServerAddresses"></a>

```typescript
public resetServerAddresses(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.serverAddressesInput">serverAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.serverAddresses">serverAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay">MagicTransitSiteLanStaticAddressingDhcpRelay</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serverAddressesInput`<sup>Optional</sup> <a name="serverAddressesInput" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.serverAddressesInput"></a>

```typescript
public readonly serverAddressesInput: string[];
```

- *Type:* string[]

---

##### `serverAddresses`<sup>Required</sup> <a name="serverAddresses" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.serverAddresses"></a>

```typescript
public readonly serverAddresses: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MagicTransitSiteLanStaticAddressingDhcpRelay;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay">MagicTransitSiteLanStaticAddressingDhcpRelay</a>

---


### MagicTransitSiteLanStaticAddressingDhcpServerOutputReference <a name="MagicTransitSiteLanStaticAddressingDhcpServerOutputReference" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer"></a>

```typescript
import { magicTransitSiteLan } from '@cdktn/provider-cloudflare'

new magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDhcpPoolEnd">resetDhcpPoolEnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDhcpPoolStart">resetDhcpPoolStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDnsServer">resetDnsServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDnsServers">resetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetReservations">resetReservations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDhcpPoolEnd` <a name="resetDhcpPoolEnd" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDhcpPoolEnd"></a>

```typescript
public resetDhcpPoolEnd(): void
```

##### `resetDhcpPoolStart` <a name="resetDhcpPoolStart" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDhcpPoolStart"></a>

```typescript
public resetDhcpPoolStart(): void
```

##### `resetDnsServer` <a name="resetDnsServer" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDnsServer"></a>

```typescript
public resetDnsServer(): void
```

##### `resetDnsServers` <a name="resetDnsServers" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDnsServers"></a>

```typescript
public resetDnsServers(): void
```

##### `resetReservations` <a name="resetReservations" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetReservations"></a>

```typescript
public resetReservations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolEndInput">dhcpPoolEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolStartInput">dhcpPoolStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServerInput">dnsServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServersInput">dnsServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.reservationsInput">reservationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolEnd">dhcpPoolEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolStart">dhcpPoolStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServer">dnsServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServers">dnsServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.reservations">reservations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer">MagicTransitSiteLanStaticAddressingDhcpServer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dhcpPoolEndInput`<sup>Optional</sup> <a name="dhcpPoolEndInput" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolEndInput"></a>

```typescript
public readonly dhcpPoolEndInput: string;
```

- *Type:* string

---

##### `dhcpPoolStartInput`<sup>Optional</sup> <a name="dhcpPoolStartInput" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolStartInput"></a>

```typescript
public readonly dhcpPoolStartInput: string;
```

- *Type:* string

---

##### `dnsServerInput`<sup>Optional</sup> <a name="dnsServerInput" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServerInput"></a>

```typescript
public readonly dnsServerInput: string;
```

- *Type:* string

---

##### `dnsServersInput`<sup>Optional</sup> <a name="dnsServersInput" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServersInput"></a>

```typescript
public readonly dnsServersInput: string[];
```

- *Type:* string[]

---

##### `reservationsInput`<sup>Optional</sup> <a name="reservationsInput" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.reservationsInput"></a>

```typescript
public readonly reservationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `dhcpPoolEnd`<sup>Required</sup> <a name="dhcpPoolEnd" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolEnd"></a>

```typescript
public readonly dhcpPoolEnd: string;
```

- *Type:* string

---

##### `dhcpPoolStart`<sup>Required</sup> <a name="dhcpPoolStart" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolStart"></a>

```typescript
public readonly dhcpPoolStart: string;
```

- *Type:* string

---

##### `dnsServer`<sup>Required</sup> <a name="dnsServer" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServer"></a>

```typescript
public readonly dnsServer: string;
```

- *Type:* string

---

##### `dnsServers`<sup>Required</sup> <a name="dnsServers" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServers"></a>

```typescript
public readonly dnsServers: string[];
```

- *Type:* string[]

---

##### `reservations`<sup>Required</sup> <a name="reservations" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.reservations"></a>

```typescript
public readonly reservations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MagicTransitSiteLanStaticAddressingDhcpServer;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer">MagicTransitSiteLanStaticAddressingDhcpServer</a>

---


### MagicTransitSiteLanStaticAddressingOutputReference <a name="MagicTransitSiteLanStaticAddressingOutputReference" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.Initializer"></a>

```typescript
import { magicTransitSiteLan } from '@cdktn/provider-cloudflare'

new magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.putDhcpRelay">putDhcpRelay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.putDhcpServer">putDhcpServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetDhcpRelay">resetDhcpRelay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetDhcpServer">resetDhcpServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetSecondaryAddress">resetSecondaryAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetVirtualAddress">resetVirtualAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDhcpRelay` <a name="putDhcpRelay" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.putDhcpRelay"></a>

```typescript
public putDhcpRelay(value: MagicTransitSiteLanStaticAddressingDhcpRelay): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.putDhcpRelay.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay">MagicTransitSiteLanStaticAddressingDhcpRelay</a>

---

##### `putDhcpServer` <a name="putDhcpServer" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.putDhcpServer"></a>

```typescript
public putDhcpServer(value: MagicTransitSiteLanStaticAddressingDhcpServer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.putDhcpServer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer">MagicTransitSiteLanStaticAddressingDhcpServer</a>

---

##### `resetDhcpRelay` <a name="resetDhcpRelay" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetDhcpRelay"></a>

```typescript
public resetDhcpRelay(): void
```

##### `resetDhcpServer` <a name="resetDhcpServer" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetDhcpServer"></a>

```typescript
public resetDhcpServer(): void
```

##### `resetSecondaryAddress` <a name="resetSecondaryAddress" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetSecondaryAddress"></a>

```typescript
public resetSecondaryAddress(): void
```

##### `resetVirtualAddress` <a name="resetVirtualAddress" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetVirtualAddress"></a>

```typescript
public resetVirtualAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpRelay">dhcpRelay</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference">MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpServer">dhcpServer</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference">MagicTransitSiteLanStaticAddressingDhcpServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpRelayInput">dhcpRelayInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay">MagicTransitSiteLanStaticAddressingDhcpRelay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpServerInput">dhcpServerInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer">MagicTransitSiteLanStaticAddressingDhcpServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.secondaryAddressInput">secondaryAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.virtualAddressInput">virtualAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.secondaryAddress">secondaryAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.virtualAddress">virtualAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing">MagicTransitSiteLanStaticAddressing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dhcpRelay`<sup>Required</sup> <a name="dhcpRelay" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpRelay"></a>

```typescript
public readonly dhcpRelay: MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference">MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference</a>

---

##### `dhcpServer`<sup>Required</sup> <a name="dhcpServer" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpServer"></a>

```typescript
public readonly dhcpServer: MagicTransitSiteLanStaticAddressingDhcpServerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference">MagicTransitSiteLanStaticAddressingDhcpServerOutputReference</a>

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `dhcpRelayInput`<sup>Optional</sup> <a name="dhcpRelayInput" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpRelayInput"></a>

```typescript
public readonly dhcpRelayInput: IResolvable | MagicTransitSiteLanStaticAddressingDhcpRelay;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay">MagicTransitSiteLanStaticAddressingDhcpRelay</a>

---

##### `dhcpServerInput`<sup>Optional</sup> <a name="dhcpServerInput" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpServerInput"></a>

```typescript
public readonly dhcpServerInput: IResolvable | MagicTransitSiteLanStaticAddressingDhcpServer;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer">MagicTransitSiteLanStaticAddressingDhcpServer</a>

---

##### `secondaryAddressInput`<sup>Optional</sup> <a name="secondaryAddressInput" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.secondaryAddressInput"></a>

```typescript
public readonly secondaryAddressInput: string;
```

- *Type:* string

---

##### `virtualAddressInput`<sup>Optional</sup> <a name="virtualAddressInput" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.virtualAddressInput"></a>

```typescript
public readonly virtualAddressInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `secondaryAddress`<sup>Required</sup> <a name="secondaryAddress" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.secondaryAddress"></a>

```typescript
public readonly secondaryAddress: string;
```

- *Type:* string

---

##### `virtualAddress`<sup>Required</sup> <a name="virtualAddress" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.virtualAddress"></a>

```typescript
public readonly virtualAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MagicTransitSiteLanStaticAddressing;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing">MagicTransitSiteLanStaticAddressing</a>

---



