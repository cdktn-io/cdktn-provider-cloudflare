# `dataCloudflareAccountDnsSettings` Submodule <a name="`dataCloudflareAccountDnsSettings` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAccountDnsSettings <a name="DataCloudflareAccountDnsSettings" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_dns_settings cloudflare_account_dns_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.Initializer"></a>

```typescript
import { dataCloudflareAccountDnsSettings } from '@cdktn/provider-cloudflare'

new dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings(scope: Construct, id: string, config: DataCloudflareAccountDnsSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig">DataCloudflareAccountDnsSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig">DataCloudflareAccountDnsSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareAccountDnsSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.isConstruct"></a>

```typescript
import { dataCloudflareAccountDnsSettings } from '@cdktn/provider-cloudflare'

dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.isTerraformElement"></a>

```typescript
import { dataCloudflareAccountDnsSettings } from '@cdktn/provider-cloudflare'

dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.isTerraformDataSource"></a>

```typescript
import { dataCloudflareAccountDnsSettings } from '@cdktn/provider-cloudflare'

dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.generateConfigForImport"></a>

```typescript
import { dataCloudflareAccountDnsSettings } from '@cdktn/provider-cloudflare'

dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareAccountDnsSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareAccountDnsSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareAccountDnsSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_dns_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareAccountDnsSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.zoneDefaults">zoneDefaults</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference">DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `zoneDefaults`<sup>Required</sup> <a name="zoneDefaults" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.zoneDefaults"></a>

```typescript
public readonly zoneDefaults: DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference">DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAccountDnsSettingsConfig <a name="DataCloudflareAccountDnsSettingsConfig" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.Initializer"></a>

```typescript
import { dataCloudflareAccountDnsSettings } from '@cdktn/provider-cloudflare'

const dataCloudflareAccountDnsSettingsConfig: dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_dns_settings#account_id DataCloudflareAccountDnsSettings#account_id}

---

### DataCloudflareAccountDnsSettingsZoneDefaults <a name="DataCloudflareAccountDnsSettingsZoneDefaults" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaults.Initializer"></a>

```typescript
import { dataCloudflareAccountDnsSettings } from '@cdktn/provider-cloudflare'

const dataCloudflareAccountDnsSettingsZoneDefaults: dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaults = { ... }
```


### DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns <a name="DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns.Initializer"></a>

```typescript
import { dataCloudflareAccountDnsSettings } from '@cdktn/provider-cloudflare'

const dataCloudflareAccountDnsSettingsZoneDefaultsInternalDns: dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns = { ... }
```


### DataCloudflareAccountDnsSettingsZoneDefaultsNameservers <a name="DataCloudflareAccountDnsSettingsZoneDefaultsNameservers" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameservers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameservers.Initializer"></a>

```typescript
import { dataCloudflareAccountDnsSettings } from '@cdktn/provider-cloudflare'

const dataCloudflareAccountDnsSettingsZoneDefaultsNameservers: dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameservers = { ... }
```


### DataCloudflareAccountDnsSettingsZoneDefaultsSoa <a name="DataCloudflareAccountDnsSettingsZoneDefaultsSoa" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoa"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoa.Initializer"></a>

```typescript
import { dataCloudflareAccountDnsSettings } from '@cdktn/provider-cloudflare'

const dataCloudflareAccountDnsSettingsZoneDefaultsSoa: dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoa = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference <a name="DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareAccountDnsSettings } from '@cdktn/provider-cloudflare'

new dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneId">referenceZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns">DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `referenceZoneId`<sup>Required</sup> <a name="referenceZoneId" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneId"></a>

```typescript
public readonly referenceZoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns">DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns</a>

---


### DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference <a name="DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer"></a>

```typescript
import { dataCloudflareAccountDnsSettings } from '@cdktn/provider-cloudflare'

new dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameservers">DataCloudflareAccountDnsSettingsZoneDefaultsNameservers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareAccountDnsSettingsZoneDefaultsNameservers;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameservers">DataCloudflareAccountDnsSettingsZoneDefaultsNameservers</a>

---


### DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference <a name="DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareAccountDnsSettings } from '@cdktn/provider-cloudflare'

new dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.flattenAllCnames">flattenAllCnames</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.foundationDns">foundationDns</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.internalDns">internalDns</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference">DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.multiProvider">multiProvider</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.nameservers">nameservers</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference">DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.nsTtl">nsTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.secondaryOverrides">secondaryOverrides</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.soa">soa</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference">DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.zoneMode">zoneMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaults">DataCloudflareAccountDnsSettingsZoneDefaults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `flattenAllCnames`<sup>Required</sup> <a name="flattenAllCnames" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.flattenAllCnames"></a>

```typescript
public readonly flattenAllCnames: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `foundationDns`<sup>Required</sup> <a name="foundationDns" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.foundationDns"></a>

```typescript
public readonly foundationDns: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalDns`<sup>Required</sup> <a name="internalDns" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.internalDns"></a>

```typescript
public readonly internalDns: DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference">DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference</a>

---

##### `multiProvider`<sup>Required</sup> <a name="multiProvider" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.multiProvider"></a>

```typescript
public readonly multiProvider: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.nameservers"></a>

```typescript
public readonly nameservers: DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference">DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference</a>

---

##### `nsTtl`<sup>Required</sup> <a name="nsTtl" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.nsTtl"></a>

```typescript
public readonly nsTtl: number;
```

- *Type:* number

---

##### `secondaryOverrides`<sup>Required</sup> <a name="secondaryOverrides" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.secondaryOverrides"></a>

```typescript
public readonly secondaryOverrides: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `soa`<sup>Required</sup> <a name="soa" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.soa"></a>

```typescript
public readonly soa: DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference">DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference</a>

---

##### `zoneMode`<sup>Required</sup> <a name="zoneMode" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.zoneMode"></a>

```typescript
public readonly zoneMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareAccountDnsSettingsZoneDefaults;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaults">DataCloudflareAccountDnsSettingsZoneDefaults</a>

---


### DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference <a name="DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer"></a>

```typescript
import { dataCloudflareAccountDnsSettings } from '@cdktn/provider-cloudflare'

new dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.expire">expire</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.minTtl">minTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.mname">mname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.refresh">refresh</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.retry">retry</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.rname">rname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoa">DataCloudflareAccountDnsSettingsZoneDefaultsSoa</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expire`<sup>Required</sup> <a name="expire" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.expire"></a>

```typescript
public readonly expire: number;
```

- *Type:* number

---

##### `minTtl`<sup>Required</sup> <a name="minTtl" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.minTtl"></a>

```typescript
public readonly minTtl: number;
```

- *Type:* number

---

##### `mname`<sup>Required</sup> <a name="mname" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.mname"></a>

```typescript
public readonly mname: string;
```

- *Type:* string

---

##### `refresh`<sup>Required</sup> <a name="refresh" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.refresh"></a>

```typescript
public readonly refresh: number;
```

- *Type:* number

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.retry"></a>

```typescript
public readonly retry: number;
```

- *Type:* number

---

##### `rname`<sup>Required</sup> <a name="rname" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.rname"></a>

```typescript
public readonly rname: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareAccountDnsSettingsZoneDefaultsSoa;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoa">DataCloudflareAccountDnsSettingsZoneDefaultsSoa</a>

---



