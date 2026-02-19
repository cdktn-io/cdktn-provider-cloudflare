# `dataCloudflareTurnstileWidget` Submodule <a name="`dataCloudflareTurnstileWidget` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareTurnstileWidget <a name="DataCloudflareTurnstileWidget" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/turnstile_widget cloudflare_turnstile_widget}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.Initializer"></a>

```typescript
import { dataCloudflareTurnstileWidget } from '@cdktn/provider-cloudflare'

new dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget(scope: Construct, id: string, config: DataCloudflareTurnstileWidgetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetConfig">DataCloudflareTurnstileWidgetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetConfig">DataCloudflareTurnstileWidgetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.resetSitekey">resetSitekey</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareTurnstileWidgetFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilter">DataCloudflareTurnstileWidgetFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetSitekey` <a name="resetSitekey" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.resetSitekey"></a>

```typescript
public resetSitekey(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareTurnstileWidget resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.isConstruct"></a>

```typescript
import { dataCloudflareTurnstileWidget } from '@cdktn/provider-cloudflare'

dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.isTerraformElement"></a>

```typescript
import { dataCloudflareTurnstileWidget } from '@cdktn/provider-cloudflare'

dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.isTerraformDataSource"></a>

```typescript
import { dataCloudflareTurnstileWidget } from '@cdktn/provider-cloudflare'

dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.generateConfigForImport"></a>

```typescript
import { dataCloudflareTurnstileWidget } from '@cdktn/provider-cloudflare'

dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareTurnstileWidget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareTurnstileWidget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareTurnstileWidget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/turnstile_widget#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareTurnstileWidget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.botFightMode">botFightMode</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.clearanceLevel">clearanceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.domains">domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.ephemeralId">ephemeralId</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference">DataCloudflareTurnstileWidgetFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.offlabel">offlabel</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilter">DataCloudflareTurnstileWidgetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.sitekeyInput">sitekeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.sitekey">sitekey</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `botFightMode`<sup>Required</sup> <a name="botFightMode" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.botFightMode"></a>

```typescript
public readonly botFightMode: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `clearanceLevel`<sup>Required</sup> <a name="clearanceLevel" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.clearanceLevel"></a>

```typescript
public readonly clearanceLevel: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

---

##### `ephemeralId`<sup>Required</sup> <a name="ephemeralId" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.ephemeralId"></a>

```typescript
public readonly ephemeralId: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.filter"></a>

```typescript
public readonly filter: DataCloudflareTurnstileWidgetFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference">DataCloudflareTurnstileWidgetFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `offlabel`<sup>Required</sup> <a name="offlabel" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.offlabel"></a>

```typescript
public readonly offlabel: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareTurnstileWidgetFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilter">DataCloudflareTurnstileWidgetFilter</a>

---

##### `sitekeyInput`<sup>Optional</sup> <a name="sitekeyInput" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.sitekeyInput"></a>

```typescript
public readonly sitekeyInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `sitekey`<sup>Required</sup> <a name="sitekey" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.sitekey"></a>

```typescript
public readonly sitekey: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareTurnstileWidgetConfig <a name="DataCloudflareTurnstileWidgetConfig" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetConfig.Initializer"></a>

```typescript
import { dataCloudflareTurnstileWidget } from '@cdktn/provider-cloudflare'

const dataCloudflareTurnstileWidgetConfig: dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilter">DataCloudflareTurnstileWidgetFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/turnstile_widget#filter DataCloudflareTurnstileWidget#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetConfig.property.sitekey">sitekey</a></code> | <code>string</code> | Widget item identifier tag. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/turnstile_widget#account_id DataCloudflareTurnstileWidget#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareTurnstileWidgetFilter;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilter">DataCloudflareTurnstileWidgetFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/turnstile_widget#filter DataCloudflareTurnstileWidget#filter}.

---

##### `sitekey`<sup>Optional</sup> <a name="sitekey" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetConfig.property.sitekey"></a>

```typescript
public readonly sitekey: string;
```

- *Type:* string

Widget item identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/turnstile_widget#sitekey DataCloudflareTurnstileWidget#sitekey}

---

### DataCloudflareTurnstileWidgetFilter <a name="DataCloudflareTurnstileWidgetFilter" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilter.Initializer"></a>

```typescript
import { dataCloudflareTurnstileWidget } from '@cdktn/provider-cloudflare'

const dataCloudflareTurnstileWidgetFilter: dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilter.property.direction">direction</a></code> | <code>string</code> | Direction to order widgets. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilter.property.filter">filter</a></code> | <code>string</code> | Filter widgets by field using case-insensitive substring matching. Format: `field:value`. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilter.property.order">order</a></code> | <code>string</code> | Field to order widgets by. Available values: "id", "sitekey", "name", "created_on", "modified_on". |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilter.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Direction to order widgets. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/turnstile_widget#direction DataCloudflareTurnstileWidget#direction}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilter.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Filter widgets by field using case-insensitive substring matching. Format: `field:value`.

Supported fields:
- `name` - Filter by widget name (e.g., `filter=name:login-form`)
- `sitekey` - Filter by sitekey (e.g., `filter=sitekey:0x4AAA`)

Returns 400 Bad Request if the field is unsupported or format is invalid.
An empty filter value returns all results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/turnstile_widget#filter DataCloudflareTurnstileWidget#filter}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilter.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Field to order widgets by. Available values: "id", "sitekey", "name", "created_on", "modified_on".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/turnstile_widget#order DataCloudflareTurnstileWidget#order}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareTurnstileWidgetFilterOutputReference <a name="DataCloudflareTurnstileWidgetFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareTurnstileWidget } from '@cdktn/provider-cloudflare'

new dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.resetOrder">resetOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilter">DataCloudflareTurnstileWidgetFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareTurnstileWidgetFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareTurnstileWidget.DataCloudflareTurnstileWidgetFilter">DataCloudflareTurnstileWidgetFilter</a>

---



