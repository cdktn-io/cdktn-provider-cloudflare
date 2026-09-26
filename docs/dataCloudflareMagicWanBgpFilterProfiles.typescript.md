# `dataCloudflareMagicWanBgpFilterProfiles` Submodule <a name="`dataCloudflareMagicWanBgpFilterProfiles` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicWanBgpFilterProfiles <a name="DataCloudflareMagicWanBgpFilterProfiles" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/data-sources/magic_wan_bgp_filter_profiles cloudflare_magic_wan_bgp_filter_profiles}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer"></a>

```typescript
import { dataCloudflareMagicWanBgpFilterProfiles } from '@cdktn/provider-cloudflare'

new dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles(scope: Construct, id: string, config: DataCloudflareMagicWanBgpFilterProfilesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig">DataCloudflareMagicWanBgpFilterProfilesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig">DataCloudflareMagicWanBgpFilterProfilesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareMagicWanBgpFilterProfiles resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isConstruct"></a>

```typescript
import { dataCloudflareMagicWanBgpFilterProfiles } from '@cdktn/provider-cloudflare'

dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isTerraformElement"></a>

```typescript
import { dataCloudflareMagicWanBgpFilterProfiles } from '@cdktn/provider-cloudflare'

dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isTerraformDataSource"></a>

```typescript
import { dataCloudflareMagicWanBgpFilterProfiles } from '@cdktn/provider-cloudflare'

dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.generateConfigForImport"></a>

```typescript
import { dataCloudflareMagicWanBgpFilterProfiles } from '@cdktn/provider-cloudflare'

dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareMagicWanBgpFilterProfiles resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareMagicWanBgpFilterProfiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareMagicWanBgpFilterProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/data-sources/magic_wan_bgp_filter_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicWanBgpFilterProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList">DataCloudflareMagicWanBgpFilterProfilesResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.result"></a>

```typescript
public readonly result: DataCloudflareMagicWanBgpFilterProfilesResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList">DataCloudflareMagicWanBgpFilterProfilesResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicWanBgpFilterProfilesConfig <a name="DataCloudflareMagicWanBgpFilterProfilesConfig" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.Initializer"></a>

```typescript
import { dataCloudflareMagicWanBgpFilterProfiles } from '@cdktn/provider-cloudflare'

const dataCloudflareMagicWanBgpFilterProfilesConfig: dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/data-sources/magic_wan_bgp_filter_profiles#account_id DataCloudflareMagicWanBgpFilterProfiles#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/data-sources/magic_wan_bgp_filter_profiles#max_items DataCloudflareMagicWanBgpFilterProfiles#max_items}

---

### DataCloudflareMagicWanBgpFilterProfilesResult <a name="DataCloudflareMagicWanBgpFilterProfilesResult" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResult.Initializer"></a>

```typescript
import { dataCloudflareMagicWanBgpFilterProfiles } from '@cdktn/provider-cloudflare'

const dataCloudflareMagicWanBgpFilterProfilesResult: dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicWanBgpFilterProfilesResultList <a name="DataCloudflareMagicWanBgpFilterProfilesResultList" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.Initializer"></a>

```typescript
import { dataCloudflareMagicWanBgpFilterProfiles } from '@cdktn/provider-cloudflare'

new dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.get"></a>

```typescript
public get(index: number): DataCloudflareMagicWanBgpFilterProfilesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareMagicWanBgpFilterProfilesResultOutputReference <a name="DataCloudflareMagicWanBgpFilterProfilesResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareMagicWanBgpFilterProfiles } from '@cdktn/provider-cloudflare'

new dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.matchAction">matchAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.targets">targets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResult">DataCloudflareMagicWanBgpFilterProfilesResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `matchAction`<sup>Required</sup> <a name="matchAction" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.matchAction"></a>

```typescript
public readonly matchAction: string;
```

- *Type:* string

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.targets"></a>

```typescript
public readonly targets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareMagicWanBgpFilterProfilesResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResult">DataCloudflareMagicWanBgpFilterProfilesResult</a>

---



