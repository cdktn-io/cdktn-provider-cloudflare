# `dataCloudflareMagicTransitCf1Site` Submodule <a name="`dataCloudflareMagicTransitCf1Site` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicTransitCf1Site <a name="DataCloudflareMagicTransitCf1Site" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/magic_transit_cf1_site cloudflare_magic_transit_cf1_site}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitCf1Site } from '@cdktn/provider-cloudflare'

new dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site(scope: Construct, id: string, config: DataCloudflareMagicTransitCf1SiteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig">DataCloudflareMagicTransitCf1SiteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig">DataCloudflareMagicTransitCf1SiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareMagicTransitCf1Site resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isConstruct"></a>

```typescript
import { dataCloudflareMagicTransitCf1Site } from '@cdktn/provider-cloudflare'

dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isTerraformElement"></a>

```typescript
import { dataCloudflareMagicTransitCf1Site } from '@cdktn/provider-cloudflare'

dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isTerraformDataSource"></a>

```typescript
import { dataCloudflareMagicTransitCf1Site } from '@cdktn/provider-cloudflare'

dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.generateConfigForImport"></a>

```typescript
import { dataCloudflareMagicTransitCf1Site } from '@cdktn/provider-cloudflare'

dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareMagicTransitCf1Site resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareMagicTransitCf1Site to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareMagicTransitCf1Site that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/magic_transit_cf1_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicTransitCf1Site to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.location">location</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference">DataCloudflareMagicTransitCf1SiteLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.cf1SiteIdInput">cf1SiteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.cf1SiteId">cf1SiteId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.location"></a>

```typescript
public readonly location: DataCloudflareMagicTransitCf1SiteLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference">DataCloudflareMagicTransitCf1SiteLocationOutputReference</a>

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `cf1SiteIdInput`<sup>Optional</sup> <a name="cf1SiteIdInput" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.cf1SiteIdInput"></a>

```typescript
public readonly cf1SiteIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `cf1SiteId`<sup>Required</sup> <a name="cf1SiteId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.cf1SiteId"></a>

```typescript
public readonly cf1SiteId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicTransitCf1SiteConfig <a name="DataCloudflareMagicTransitCf1SiteConfig" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitCf1Site } from '@cdktn/provider-cloudflare'

const dataCloudflareMagicTransitCf1SiteConfig: dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.cf1SiteId">cf1SiteId</a></code> | <code>string</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/magic_transit_cf1_site#account_id DataCloudflareMagicTransitCf1Site#account_id}

---

##### `cf1SiteId`<sup>Required</sup> <a name="cf1SiteId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.cf1SiteId"></a>

```typescript
public readonly cf1SiteId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/magic_transit_cf1_site#cf1_site_id DataCloudflareMagicTransitCf1Site#cf1_site_id}

---

### DataCloudflareMagicTransitCf1SiteLocation <a name="DataCloudflareMagicTransitCf1SiteLocation" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocation.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitCf1Site } from '@cdktn/provider-cloudflare'

const dataCloudflareMagicTransitCf1SiteLocation: dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocation = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicTransitCf1SiteLocationOutputReference <a name="DataCloudflareMagicTransitCf1SiteLocationOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitCf1Site } from '@cdktn/provider-cloudflare'

new dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.lat">lat</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.long">long</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocation">DataCloudflareMagicTransitCf1SiteLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lat`<sup>Required</sup> <a name="lat" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.lat"></a>

```typescript
public readonly lat: number;
```

- *Type:* number

---

##### `long`<sup>Required</sup> <a name="long" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.long"></a>

```typescript
public readonly long: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareMagicTransitCf1SiteLocation;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocation">DataCloudflareMagicTransitCf1SiteLocation</a>

---



