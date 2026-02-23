# `magicWanIpsecTunnel` Submodule <a name="`magicWanIpsecTunnel` Submodule" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicWanIpsecTunnel <a name="MagicWanIpsecTunnel" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel cloudflare_magic_wan_ipsec_tunnel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer"></a>

```typescript
import { magicWanIpsecTunnel } from '@cdktn/provider-cloudflare'

new magicWanIpsecTunnel.MagicWanIpsecTunnel(scope: Construct, id: string, config: MagicWanIpsecTunnelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig">MagicWanIpsecTunnelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig">MagicWanIpsecTunnelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putBgp">putBgp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putCustomRemoteIdentities">putCustomRemoteIdentities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putHealthCheck">putHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetAutomaticReturnRouting">resetAutomaticReturnRouting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetBgp">resetBgp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetCustomerEndpoint">resetCustomerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetCustomRemoteIdentities">resetCustomRemoteIdentities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetHealthCheck">resetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetInterfaceAddress6">resetInterfaceAddress6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetPsk">resetPsk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetReplayProtection">resetReplayProtection</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBgp` <a name="putBgp" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putBgp"></a>

```typescript
public putBgp(value: MagicWanIpsecTunnelBgp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putBgp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp">MagicWanIpsecTunnelBgp</a>

---

##### `putCustomRemoteIdentities` <a name="putCustomRemoteIdentities" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putCustomRemoteIdentities"></a>

```typescript
public putCustomRemoteIdentities(value: MagicWanIpsecTunnelCustomRemoteIdentities): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putCustomRemoteIdentities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities">MagicWanIpsecTunnelCustomRemoteIdentities</a>

---

##### `putHealthCheck` <a name="putHealthCheck" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putHealthCheck"></a>

```typescript
public putHealthCheck(value: MagicWanIpsecTunnelHealthCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a>

---

##### `resetAutomaticReturnRouting` <a name="resetAutomaticReturnRouting" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetAutomaticReturnRouting"></a>

```typescript
public resetAutomaticReturnRouting(): void
```

##### `resetBgp` <a name="resetBgp" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetBgp"></a>

```typescript
public resetBgp(): void
```

##### `resetCustomerEndpoint` <a name="resetCustomerEndpoint" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetCustomerEndpoint"></a>

```typescript
public resetCustomerEndpoint(): void
```

##### `resetCustomRemoteIdentities` <a name="resetCustomRemoteIdentities" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetCustomRemoteIdentities"></a>

```typescript
public resetCustomRemoteIdentities(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHealthCheck` <a name="resetHealthCheck" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetHealthCheck"></a>

```typescript
public resetHealthCheck(): void
```

##### `resetInterfaceAddress6` <a name="resetInterfaceAddress6" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetInterfaceAddress6"></a>

```typescript
public resetInterfaceAddress6(): void
```

##### `resetPsk` <a name="resetPsk" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetPsk"></a>

```typescript
public resetPsk(): void
```

##### `resetReplayProtection` <a name="resetReplayProtection" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetReplayProtection"></a>

```typescript
public resetReplayProtection(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MagicWanIpsecTunnel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isConstruct"></a>

```typescript
import { magicWanIpsecTunnel } from '@cdktn/provider-cloudflare'

magicWanIpsecTunnel.MagicWanIpsecTunnel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformElement"></a>

```typescript
import { magicWanIpsecTunnel } from '@cdktn/provider-cloudflare'

magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformResource"></a>

```typescript
import { magicWanIpsecTunnel } from '@cdktn/provider-cloudflare'

magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport"></a>

```typescript
import { magicWanIpsecTunnel } from '@cdktn/provider-cloudflare'

magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MagicWanIpsecTunnel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MagicWanIpsecTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MagicWanIpsecTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MagicWanIpsecTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.allowNullCipher">allowNullCipher</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.bgp">bgp</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference">MagicWanIpsecTunnelBgpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.bgpStatus">bgpStatus</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference">MagicWanIpsecTunnelBgpStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customRemoteIdentities">customRemoteIdentities</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference">MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference">MagicWanIpsecTunnelHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.pskMetadata">pskMetadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference">MagicWanIpsecTunnelPskMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.automaticReturnRoutingInput">automaticReturnRoutingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.bgpInput">bgpInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp">MagicWanIpsecTunnelBgp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cloudflareEndpointInput">cloudflareEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customerEndpointInput">customerEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customRemoteIdentitiesInput">customRemoteIdentitiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities">MagicWanIpsecTunnelCustomRemoteIdentities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckInput">healthCheckInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddress6Input">interfaceAddress6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddressInput">interfaceAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.pskInput">pskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.replayProtectionInput">replayProtectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.automaticReturnRouting">automaticReturnRouting</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cloudflareEndpoint">cloudflareEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customerEndpoint">customerEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddress">interfaceAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddress6">interfaceAddress6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.psk">psk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.replayProtection">replayProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `allowNullCipher`<sup>Required</sup> <a name="allowNullCipher" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.allowNullCipher"></a>

```typescript
public readonly allowNullCipher: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `bgp`<sup>Required</sup> <a name="bgp" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.bgp"></a>

```typescript
public readonly bgp: MagicWanIpsecTunnelBgpOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference">MagicWanIpsecTunnelBgpOutputReference</a>

---

##### `bgpStatus`<sup>Required</sup> <a name="bgpStatus" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.bgpStatus"></a>

```typescript
public readonly bgpStatus: MagicWanIpsecTunnelBgpStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference">MagicWanIpsecTunnelBgpStatusOutputReference</a>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `customRemoteIdentities`<sup>Required</sup> <a name="customRemoteIdentities" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customRemoteIdentities"></a>

```typescript
public readonly customRemoteIdentities: MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference">MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference</a>

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheck"></a>

```typescript
public readonly healthCheck: MagicWanIpsecTunnelHealthCheckOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference">MagicWanIpsecTunnelHealthCheckOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `pskMetadata`<sup>Required</sup> <a name="pskMetadata" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.pskMetadata"></a>

```typescript
public readonly pskMetadata: MagicWanIpsecTunnelPskMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference">MagicWanIpsecTunnelPskMetadataOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `automaticReturnRoutingInput`<sup>Optional</sup> <a name="automaticReturnRoutingInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.automaticReturnRoutingInput"></a>

```typescript
public readonly automaticReturnRoutingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bgpInput`<sup>Optional</sup> <a name="bgpInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.bgpInput"></a>

```typescript
public readonly bgpInput: IResolvable | MagicWanIpsecTunnelBgp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp">MagicWanIpsecTunnelBgp</a>

---

##### `cloudflareEndpointInput`<sup>Optional</sup> <a name="cloudflareEndpointInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cloudflareEndpointInput"></a>

```typescript
public readonly cloudflareEndpointInput: string;
```

- *Type:* string

---

##### `customerEndpointInput`<sup>Optional</sup> <a name="customerEndpointInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customerEndpointInput"></a>

```typescript
public readonly customerEndpointInput: string;
```

- *Type:* string

---

##### `customRemoteIdentitiesInput`<sup>Optional</sup> <a name="customRemoteIdentitiesInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customRemoteIdentitiesInput"></a>

```typescript
public readonly customRemoteIdentitiesInput: IResolvable | MagicWanIpsecTunnelCustomRemoteIdentities;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities">MagicWanIpsecTunnelCustomRemoteIdentities</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `healthCheckInput`<sup>Optional</sup> <a name="healthCheckInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckInput"></a>

```typescript
public readonly healthCheckInput: IResolvable | MagicWanIpsecTunnelHealthCheck;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a>

---

##### `interfaceAddress6Input`<sup>Optional</sup> <a name="interfaceAddress6Input" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddress6Input"></a>

```typescript
public readonly interfaceAddress6Input: string;
```

- *Type:* string

---

##### `interfaceAddressInput`<sup>Optional</sup> <a name="interfaceAddressInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddressInput"></a>

```typescript
public readonly interfaceAddressInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pskInput`<sup>Optional</sup> <a name="pskInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.pskInput"></a>

```typescript
public readonly pskInput: string;
```

- *Type:* string

---

##### `replayProtectionInput`<sup>Optional</sup> <a name="replayProtectionInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.replayProtectionInput"></a>

```typescript
public readonly replayProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `automaticReturnRouting`<sup>Required</sup> <a name="automaticReturnRouting" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.automaticReturnRouting"></a>

```typescript
public readonly automaticReturnRouting: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cloudflareEndpoint`<sup>Required</sup> <a name="cloudflareEndpoint" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cloudflareEndpoint"></a>

```typescript
public readonly cloudflareEndpoint: string;
```

- *Type:* string

---

##### `customerEndpoint`<sup>Required</sup> <a name="customerEndpoint" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customerEndpoint"></a>

```typescript
public readonly customerEndpoint: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `interfaceAddress`<sup>Required</sup> <a name="interfaceAddress" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddress"></a>

```typescript
public readonly interfaceAddress: string;
```

- *Type:* string

---

##### `interfaceAddress6`<sup>Required</sup> <a name="interfaceAddress6" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddress6"></a>

```typescript
public readonly interfaceAddress6: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `psk`<sup>Required</sup> <a name="psk" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.psk"></a>

```typescript
public readonly psk: string;
```

- *Type:* string

---

##### `replayProtection`<sup>Required</sup> <a name="replayProtection" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.replayProtection"></a>

```typescript
public readonly replayProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MagicWanIpsecTunnelBgp <a name="MagicWanIpsecTunnelBgp" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp.Initializer"></a>

```typescript
import { magicWanIpsecTunnel } from '@cdktn/provider-cloudflare'

const magicWanIpsecTunnelBgp: magicWanIpsecTunnel.MagicWanIpsecTunnelBgp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp.property.customerAsn">customerAsn</a></code> | <code>number</code> | ASN used on the customer end of the BGP session. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp.property.extraPrefixes">extraPrefixes</a></code> | <code>string[]</code> | Prefixes in this list will be advertised to the customer device, in addition to the routes in the Magic routing table. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp.property.md5Key">md5Key</a></code> | <code>string</code> | MD5 key to use for session authentication. |

---

##### `customerAsn`<sup>Required</sup> <a name="customerAsn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp.property.customerAsn"></a>

```typescript
public readonly customerAsn: number;
```

- *Type:* number

ASN used on the customer end of the BGP session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#customer_asn MagicWanIpsecTunnel#customer_asn}

---

##### `extraPrefixes`<sup>Optional</sup> <a name="extraPrefixes" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp.property.extraPrefixes"></a>

```typescript
public readonly extraPrefixes: string[];
```

- *Type:* string[]

Prefixes in this list will be advertised to the customer device, in addition to the routes in the Magic routing table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#extra_prefixes MagicWanIpsecTunnel#extra_prefixes}

---

##### `md5Key`<sup>Optional</sup> <a name="md5Key" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp.property.md5Key"></a>

```typescript
public readonly md5Key: string;
```

- *Type:* string

MD5 key to use for session authentication.

Note that *this is not a security measure*. MD5 is not a valid security mechanism, and the
key is not treated as a secret value. This is *only* supported for preventing
misconfiguration, not for defending against malicious attacks.

The MD5 key, if set, must be of non-zero length and consist only of the following types of
character:

* ASCII alphanumerics: `[a-zA-Z0-9]`
* Special characters in the set `'!@#$%^&*()+[]{}<>/.,;:_-~`= \|`

In other words, MD5 keys may contain any printable ASCII character aside from newline (0x0A),
quotation mark (`"`), vertical tab (0x0B), carriage return (0x0D), tab (0x09), form feed
(0x0C), and the question mark (`?`). Requests specifying an MD5 key with one or more of
these disallowed characters will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#md5_key MagicWanIpsecTunnel#md5_key}

---

### MagicWanIpsecTunnelBgpStatus <a name="MagicWanIpsecTunnelBgpStatus" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatus.Initializer"></a>

```typescript
import { magicWanIpsecTunnel } from '@cdktn/provider-cloudflare'

const magicWanIpsecTunnelBgpStatus: magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatus = { ... }
```


### MagicWanIpsecTunnelConfig <a name="MagicWanIpsecTunnelConfig" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.Initializer"></a>

```typescript
import { magicWanIpsecTunnel } from '@cdktn/provider-cloudflare'

const magicWanIpsecTunnelConfig: magicWanIpsecTunnel.MagicWanIpsecTunnelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.cloudflareEndpoint">cloudflareEndpoint</a></code> | <code>string</code> | The IP address assigned to the Cloudflare side of the IPsec tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.interfaceAddress">interfaceAddress</a></code> | <code>string</code> | A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.name">name</a></code> | <code>string</code> | The name of the IPsec tunnel. The name cannot share a name with other tunnels. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.automaticReturnRouting">automaticReturnRouting</a></code> | <code>boolean \| cdktn.IResolvable</code> | True if automatic stateful return routing should be enabled for a tunnel, false otherwise. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.bgp">bgp</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp">MagicWanIpsecTunnelBgp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#bgp MagicWanIpsecTunnel#bgp}. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.customerEndpoint">customerEndpoint</a></code> | <code>string</code> | The IP address assigned to the customer side of the IPsec tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.customRemoteIdentities">customRemoteIdentities</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities">MagicWanIpsecTunnelCustomRemoteIdentities</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#custom_remote_identities MagicWanIpsecTunnel#custom_remote_identities}. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.description">description</a></code> | <code>string</code> | An optional description forthe IPsec tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#health_check MagicWanIpsecTunnel#health_check}. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.interfaceAddress6">interfaceAddress6</a></code> | <code>string</code> | A 127 bit IPV6 prefix from within the virtual_subnet6 prefix space with the address being the first IP of the subnet and not same as the address of virtual_subnet6. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.psk">psk</a></code> | <code>string</code> | A randomly generated or provided string for use in the IPsec tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.replayProtection">replayProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | If `true`, then IPsec replay protection will be supported in the Cloudflare-to-customer direction. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#account_id MagicWanIpsecTunnel#account_id}

---

##### `cloudflareEndpoint`<sup>Required</sup> <a name="cloudflareEndpoint" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.cloudflareEndpoint"></a>

```typescript
public readonly cloudflareEndpoint: string;
```

- *Type:* string

The IP address assigned to the Cloudflare side of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#cloudflare_endpoint MagicWanIpsecTunnel#cloudflare_endpoint}

---

##### `interfaceAddress`<sup>Required</sup> <a name="interfaceAddress" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.interfaceAddress"></a>

```typescript
public readonly interfaceAddress: string;
```

- *Type:* string

A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel.

Select the subnet from the following private IP space: 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#interface_address MagicWanIpsecTunnel#interface_address}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the IPsec tunnel. The name cannot share a name with other tunnels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#name MagicWanIpsecTunnel#name}

---

##### `automaticReturnRouting`<sup>Optional</sup> <a name="automaticReturnRouting" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.automaticReturnRouting"></a>

```typescript
public readonly automaticReturnRouting: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

True if automatic stateful return routing should be enabled for a tunnel, false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#automatic_return_routing MagicWanIpsecTunnel#automatic_return_routing}

---

##### `bgp`<sup>Optional</sup> <a name="bgp" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.bgp"></a>

```typescript
public readonly bgp: MagicWanIpsecTunnelBgp;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp">MagicWanIpsecTunnelBgp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#bgp MagicWanIpsecTunnel#bgp}.

---

##### `customerEndpoint`<sup>Optional</sup> <a name="customerEndpoint" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.customerEndpoint"></a>

```typescript
public readonly customerEndpoint: string;
```

- *Type:* string

The IP address assigned to the customer side of the IPsec tunnel.

Not required, but must be set for proactive traceroutes to work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#customer_endpoint MagicWanIpsecTunnel#customer_endpoint}

---

##### `customRemoteIdentities`<sup>Optional</sup> <a name="customRemoteIdentities" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.customRemoteIdentities"></a>

```typescript
public readonly customRemoteIdentities: MagicWanIpsecTunnelCustomRemoteIdentities;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities">MagicWanIpsecTunnelCustomRemoteIdentities</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#custom_remote_identities MagicWanIpsecTunnel#custom_remote_identities}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description forthe IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#description MagicWanIpsecTunnel#description}

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.healthCheck"></a>

```typescript
public readonly healthCheck: MagicWanIpsecTunnelHealthCheck;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#health_check MagicWanIpsecTunnel#health_check}.

---

##### `interfaceAddress6`<sup>Optional</sup> <a name="interfaceAddress6" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.interfaceAddress6"></a>

```typescript
public readonly interfaceAddress6: string;
```

- *Type:* string

A 127 bit IPV6 prefix from within the virtual_subnet6 prefix space with the address being the first IP of the subnet and not same as the address of virtual_subnet6.

Eg if virtual_subnet6 is 2606:54c1:7:0:a9fe:12d2::/127 , interface_address6 could be 2606:54c1:7:0:a9fe:12d2:1:200/127

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#interface_address6 MagicWanIpsecTunnel#interface_address6}

---

##### `psk`<sup>Optional</sup> <a name="psk" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.psk"></a>

```typescript
public readonly psk: string;
```

- *Type:* string

A randomly generated or provided string for use in the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#psk MagicWanIpsecTunnel#psk}

---

##### `replayProtection`<sup>Optional</sup> <a name="replayProtection" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.replayProtection"></a>

```typescript
public readonly replayProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If `true`, then IPsec replay protection will be supported in the Cloudflare-to-customer direction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#replay_protection MagicWanIpsecTunnel#replay_protection}

---

### MagicWanIpsecTunnelCustomRemoteIdentities <a name="MagicWanIpsecTunnelCustomRemoteIdentities" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities.Initializer"></a>

```typescript
import { magicWanIpsecTunnel } from '@cdktn/provider-cloudflare'

const magicWanIpsecTunnelCustomRemoteIdentities: magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities.property.fqdnId">fqdnId</a></code> | <code>string</code> | A custom IKE ID of type FQDN that may be used to identity the IPsec tunnel. |

---

##### `fqdnId`<sup>Optional</sup> <a name="fqdnId" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities.property.fqdnId"></a>

```typescript
public readonly fqdnId: string;
```

- *Type:* string

A custom IKE ID of type FQDN that may be used to identity the IPsec tunnel.

The
generated IKE IDs can still be used even if this custom value is specified.

Must be of the form `<custom label>.<account ID>.custom.ipsec.cloudflare.com`.

This custom ID does not need to be unique. Two IPsec tunnels may have the same custom 
fqdn_id. However, if another IPsec tunnel has the same value then the two tunnels 
cannot have the same cloudflare_endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#fqdn_id MagicWanIpsecTunnel#fqdn_id}

---

### MagicWanIpsecTunnelHealthCheck <a name="MagicWanIpsecTunnelHealthCheck" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.Initializer"></a>

```typescript
import { magicWanIpsecTunnel } from '@cdktn/provider-cloudflare'

const magicWanIpsecTunnelHealthCheck: magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.direction">direction</a></code> | <code>string</code> | The direction of the flow of the healthcheck. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Determines whether to run healthchecks for a tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.rate">rate</a></code> | <code>string</code> | How frequent the health check is run. The default value is `mid`. Available values: "low", "mid", "high". |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.target">target</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelHealthCheckTarget</a></code> | The destination address in a request type health check. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.type">type</a></code> | <code>string</code> | The type of healthcheck to run, reply or request. The default value is `reply`. Available values: "reply", "request". |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

The direction of the flow of the healthcheck.

Either unidirectional, where the probe comes to you via the tunnel and the result comes back to Cloudflare via the open Internet, or bidirectional where both the probe and result come and go via the tunnel.
Available values: "unidirectional", "bidirectional".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#direction MagicWanIpsecTunnel#direction}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Determines whether to run healthchecks for a tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#enabled MagicWanIpsecTunnel#enabled}

---

##### `rate`<sup>Optional</sup> <a name="rate" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.rate"></a>

```typescript
public readonly rate: string;
```

- *Type:* string

How frequent the health check is run. The default value is `mid`. Available values: "low", "mid", "high".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#rate MagicWanIpsecTunnel#rate}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.target"></a>

```typescript
public readonly target: MagicWanIpsecTunnelHealthCheckTarget;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelHealthCheckTarget</a>

The destination address in a request type health check.

After the healthcheck is decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded to this address. This field defaults to `customer_gre_endpoint address`. This field is ignored for bidirectional healthchecks as the interface_address (not assigned to the Cloudflare side of the tunnel) is used as the target. Must be in object form if the x-magic-new-hc-target header is set to true and string form if x-magic-new-hc-target is absent or set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#target MagicWanIpsecTunnel#target}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of healthcheck to run, reply or request. The default value is `reply`. Available values: "reply", "request".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#type MagicWanIpsecTunnel#type}

---

### MagicWanIpsecTunnelHealthCheckTarget <a name="MagicWanIpsecTunnelHealthCheckTarget" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget.Initializer"></a>

```typescript
import { magicWanIpsecTunnel } from '@cdktn/provider-cloudflare'

const magicWanIpsecTunnelHealthCheckTarget: magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget.property.saved">saved</a></code> | <code>string</code> | The saved health check target. |

---

##### `saved`<sup>Optional</sup> <a name="saved" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget.property.saved"></a>

```typescript
public readonly saved: string;
```

- *Type:* string

The saved health check target.

Setting the value to the empty string indicates that the calculated default value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#saved MagicWanIpsecTunnel#saved}

---

### MagicWanIpsecTunnelPskMetadata <a name="MagicWanIpsecTunnelPskMetadata" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadata.Initializer"></a>

```typescript
import { magicWanIpsecTunnel } from '@cdktn/provider-cloudflare'

const magicWanIpsecTunnelPskMetadata: magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadata = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### MagicWanIpsecTunnelBgpOutputReference <a name="MagicWanIpsecTunnelBgpOutputReference" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.Initializer"></a>

```typescript
import { magicWanIpsecTunnel } from '@cdktn/provider-cloudflare'

new magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.resetExtraPrefixes">resetExtraPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.resetMd5Key">resetMd5Key</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExtraPrefixes` <a name="resetExtraPrefixes" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.resetExtraPrefixes"></a>

```typescript
public resetExtraPrefixes(): void
```

##### `resetMd5Key` <a name="resetMd5Key" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.resetMd5Key"></a>

```typescript
public resetMd5Key(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.customerAsnInput">customerAsnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.extraPrefixesInput">extraPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.md5KeyInput">md5KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.customerAsn">customerAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.extraPrefixes">extraPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.md5Key">md5Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp">MagicWanIpsecTunnelBgp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerAsnInput`<sup>Optional</sup> <a name="customerAsnInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.customerAsnInput"></a>

```typescript
public readonly customerAsnInput: number;
```

- *Type:* number

---

##### `extraPrefixesInput`<sup>Optional</sup> <a name="extraPrefixesInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.extraPrefixesInput"></a>

```typescript
public readonly extraPrefixesInput: string[];
```

- *Type:* string[]

---

##### `md5KeyInput`<sup>Optional</sup> <a name="md5KeyInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.md5KeyInput"></a>

```typescript
public readonly md5KeyInput: string;
```

- *Type:* string

---

##### `customerAsn`<sup>Required</sup> <a name="customerAsn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.customerAsn"></a>

```typescript
public readonly customerAsn: number;
```

- *Type:* number

---

##### `extraPrefixes`<sup>Required</sup> <a name="extraPrefixes" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.extraPrefixes"></a>

```typescript
public readonly extraPrefixes: string[];
```

- *Type:* string[]

---

##### `md5Key`<sup>Required</sup> <a name="md5Key" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.md5Key"></a>

```typescript
public readonly md5Key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MagicWanIpsecTunnelBgp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp">MagicWanIpsecTunnelBgp</a>

---


### MagicWanIpsecTunnelBgpStatusOutputReference <a name="MagicWanIpsecTunnelBgpStatusOutputReference" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.Initializer"></a>

```typescript
import { magicWanIpsecTunnel } from '@cdktn/provider-cloudflare'

new magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.bgpState">bgpState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.cfSpeakerIp">cfSpeakerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.cfSpeakerPort">cfSpeakerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.customerSpeakerIp">customerSpeakerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.customerSpeakerPort">customerSpeakerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.tcpEstablished">tcpEstablished</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatus">MagicWanIpsecTunnelBgpStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bgpState`<sup>Required</sup> <a name="bgpState" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.bgpState"></a>

```typescript
public readonly bgpState: string;
```

- *Type:* string

---

##### `cfSpeakerIp`<sup>Required</sup> <a name="cfSpeakerIp" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.cfSpeakerIp"></a>

```typescript
public readonly cfSpeakerIp: string;
```

- *Type:* string

---

##### `cfSpeakerPort`<sup>Required</sup> <a name="cfSpeakerPort" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.cfSpeakerPort"></a>

```typescript
public readonly cfSpeakerPort: number;
```

- *Type:* number

---

##### `customerSpeakerIp`<sup>Required</sup> <a name="customerSpeakerIp" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.customerSpeakerIp"></a>

```typescript
public readonly customerSpeakerIp: string;
```

- *Type:* string

---

##### `customerSpeakerPort`<sup>Required</sup> <a name="customerSpeakerPort" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.customerSpeakerPort"></a>

```typescript
public readonly customerSpeakerPort: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tcpEstablished`<sup>Required</sup> <a name="tcpEstablished" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.tcpEstablished"></a>

```typescript
public readonly tcpEstablished: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MagicWanIpsecTunnelBgpStatus;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatus">MagicWanIpsecTunnelBgpStatus</a>

---


### MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference <a name="MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.Initializer"></a>

```typescript
import { magicWanIpsecTunnel } from '@cdktn/provider-cloudflare'

new magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.resetFqdnId">resetFqdnId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFqdnId` <a name="resetFqdnId" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.resetFqdnId"></a>

```typescript
public resetFqdnId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.fqdnIdInput">fqdnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.fqdnId">fqdnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities">MagicWanIpsecTunnelCustomRemoteIdentities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fqdnIdInput`<sup>Optional</sup> <a name="fqdnIdInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.fqdnIdInput"></a>

```typescript
public readonly fqdnIdInput: string;
```

- *Type:* string

---

##### `fqdnId`<sup>Required</sup> <a name="fqdnId" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.fqdnId"></a>

```typescript
public readonly fqdnId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MagicWanIpsecTunnelCustomRemoteIdentities;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities">MagicWanIpsecTunnelCustomRemoteIdentities</a>

---


### MagicWanIpsecTunnelHealthCheckOutputReference <a name="MagicWanIpsecTunnelHealthCheckOutputReference" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.Initializer"></a>

```typescript
import { magicWanIpsecTunnel } from '@cdktn/provider-cloudflare'

new magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetRate">resetRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTarget` <a name="putTarget" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.putTarget"></a>

```typescript
public putTarget(value: MagicWanIpsecTunnelHealthCheckTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelHealthCheckTarget</a>

---

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetRate` <a name="resetRate" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetRate"></a>

```typescript
public resetRate(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.target">target</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference">MagicWanIpsecTunnelHealthCheckTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.rateInput">rateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.targetInput">targetInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelHealthCheckTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.rate">rate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.target"></a>

```typescript
public readonly target: MagicWanIpsecTunnelHealthCheckTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference">MagicWanIpsecTunnelHealthCheckTargetOutputReference</a>

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `rateInput`<sup>Optional</sup> <a name="rateInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.rateInput"></a>

```typescript
public readonly rateInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: IResolvable | MagicWanIpsecTunnelHealthCheckTarget;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelHealthCheckTarget</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.rate"></a>

```typescript
public readonly rate: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MagicWanIpsecTunnelHealthCheck;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a>

---


### MagicWanIpsecTunnelHealthCheckTargetOutputReference <a name="MagicWanIpsecTunnelHealthCheckTargetOutputReference" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.Initializer"></a>

```typescript
import { magicWanIpsecTunnel } from '@cdktn/provider-cloudflare'

new magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.resetSaved">resetSaved</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSaved` <a name="resetSaved" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.resetSaved"></a>

```typescript
public resetSaved(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.effective">effective</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.savedInput">savedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.saved">saved</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelHealthCheckTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effective`<sup>Required</sup> <a name="effective" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.effective"></a>

```typescript
public readonly effective: string;
```

- *Type:* string

---

##### `savedInput`<sup>Optional</sup> <a name="savedInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.savedInput"></a>

```typescript
public readonly savedInput: string;
```

- *Type:* string

---

##### `saved`<sup>Required</sup> <a name="saved" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.saved"></a>

```typescript
public readonly saved: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MagicWanIpsecTunnelHealthCheckTarget;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelHealthCheckTarget</a>

---


### MagicWanIpsecTunnelPskMetadataOutputReference <a name="MagicWanIpsecTunnelPskMetadataOutputReference" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.Initializer"></a>

```typescript
import { magicWanIpsecTunnel } from '@cdktn/provider-cloudflare'

new magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.property.lastGeneratedOn">lastGeneratedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadata">MagicWanIpsecTunnelPskMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastGeneratedOn`<sup>Required</sup> <a name="lastGeneratedOn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.property.lastGeneratedOn"></a>

```typescript
public readonly lastGeneratedOn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MagicWanIpsecTunnelPskMetadata;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadata">MagicWanIpsecTunnelPskMetadata</a>

---



