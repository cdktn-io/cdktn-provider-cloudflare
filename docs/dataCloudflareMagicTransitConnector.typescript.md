# `dataCloudflareMagicTransitConnector` Submodule <a name="`dataCloudflareMagicTransitConnector` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicTransitConnector <a name="DataCloudflareMagicTransitConnector" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/magic_transit_connector cloudflare_magic_transit_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitConnector } from '@cdktn/provider-cloudflare'

new dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector(scope: Construct, id: string, config: DataCloudflareMagicTransitConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorConfig">DataCloudflareMagicTransitConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorConfig">DataCloudflareMagicTransitConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareMagicTransitConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.isConstruct"></a>

```typescript
import { dataCloudflareMagicTransitConnector } from '@cdktn/provider-cloudflare'

dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.isTerraformElement"></a>

```typescript
import { dataCloudflareMagicTransitConnector } from '@cdktn/provider-cloudflare'

dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.isTerraformDataSource"></a>

```typescript
import { dataCloudflareMagicTransitConnector } from '@cdktn/provider-cloudflare'

dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.generateConfigForImport"></a>

```typescript
import { dataCloudflareMagicTransitConnector } from '@cdktn/provider-cloudflare'

dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareMagicTransitConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareMagicTransitConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareMagicTransitConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/magic_transit_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicTransitConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.activated">activated</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.device">device</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference">DataCloudflareMagicTransitConnectorDeviceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.interruptWindowDurationHours">interruptWindowDurationHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.interruptWindowHourOfDay">interruptWindowHourOfDay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.lastHeartbeat">lastHeartbeat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.lastSeenVersion">lastSeenVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.lastUpdated">lastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.licenseKey">licenseKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.notes">notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.connectorIdInput">connectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.connectorId">connectorId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `activated`<sup>Required</sup> <a name="activated" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.activated"></a>

```typescript
public readonly activated: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `device`<sup>Required</sup> <a name="device" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.device"></a>

```typescript
public readonly device: DataCloudflareMagicTransitConnectorDeviceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference">DataCloudflareMagicTransitConnectorDeviceOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interruptWindowDurationHours`<sup>Required</sup> <a name="interruptWindowDurationHours" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.interruptWindowDurationHours"></a>

```typescript
public readonly interruptWindowDurationHours: number;
```

- *Type:* number

---

##### `interruptWindowHourOfDay`<sup>Required</sup> <a name="interruptWindowHourOfDay" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.interruptWindowHourOfDay"></a>

```typescript
public readonly interruptWindowHourOfDay: number;
```

- *Type:* number

---

##### `lastHeartbeat`<sup>Required</sup> <a name="lastHeartbeat" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.lastHeartbeat"></a>

```typescript
public readonly lastHeartbeat: string;
```

- *Type:* string

---

##### `lastSeenVersion`<sup>Required</sup> <a name="lastSeenVersion" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.lastSeenVersion"></a>

```typescript
public readonly lastSeenVersion: string;
```

- *Type:* string

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.lastUpdated"></a>

```typescript
public readonly lastUpdated: string;
```

- *Type:* string

---

##### `licenseKey`<sup>Required</sup> <a name="licenseKey" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.licenseKey"></a>

```typescript
public readonly licenseKey: string;
```

- *Type:* string

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `connectorIdInput`<sup>Optional</sup> <a name="connectorIdInput" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.connectorIdInput"></a>

```typescript
public readonly connectorIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicTransitConnectorConfig <a name="DataCloudflareMagicTransitConnectorConfig" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorConfig.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitConnector } from '@cdktn/provider-cloudflare'

const dataCloudflareMagicTransitConnectorConfig: dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorConfig.property.accountId">accountId</a></code> | <code>string</code> | Account identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorConfig.property.connectorId">connectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/magic_transit_connector#connector_id DataCloudflareMagicTransitConnector#connector_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/magic_transit_connector#account_id DataCloudflareMagicTransitConnector#account_id}

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorConfig.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/magic_transit_connector#connector_id DataCloudflareMagicTransitConnector#connector_id}.

---

### DataCloudflareMagicTransitConnectorDevice <a name="DataCloudflareMagicTransitConnectorDevice" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDevice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDevice.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitConnector } from '@cdktn/provider-cloudflare'

const dataCloudflareMagicTransitConnectorDevice: dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDevice = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicTransitConnectorDeviceOutputReference <a name="DataCloudflareMagicTransitConnectorDeviceOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitConnector } from '@cdktn/provider-cloudflare'

new dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDevice">DataCloudflareMagicTransitConnectorDevice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDeviceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareMagicTransitConnectorDevice;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitConnector.DataCloudflareMagicTransitConnectorDevice">DataCloudflareMagicTransitConnectorDevice</a>

---



