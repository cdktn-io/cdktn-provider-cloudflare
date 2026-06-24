/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MagicTransitSiteLanConfig extends cdktn.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#account_id MagicTransitSiteLan#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#bond_id MagicTransitSiteLan#bond_id}
  */
  readonly bondId?: number;
  /**
  * mark true to use this LAN for HA probing. only works for site with HA turned on. only one LAN can be set as the ha_link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#ha_link MagicTransitSiteLan#ha_link}
  */
  readonly haLink?: boolean | cdktn.IResolvable;
  /**
  * mark true to use this LAN for source-based breakout traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#is_breakout MagicTransitSiteLan#is_breakout}
  */
  readonly isBreakout?: boolean | cdktn.IResolvable;
  /**
  * mark true to use this LAN for source-based prioritized traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#is_prioritized MagicTransitSiteLan#is_prioritized}
  */
  readonly isPrioritized?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#name MagicTransitSiteLan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#nat MagicTransitSiteLan#nat}
  */
  readonly nat?: MagicTransitSiteLanNat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#physport MagicTransitSiteLan#physport}
  */
  readonly physport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#routed_subnets MagicTransitSiteLan#routed_subnets}
  */
  readonly routedSubnets?: MagicTransitSiteLanRoutedSubnets[] | cdktn.IResolvable;
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#site_id MagicTransitSiteLan#site_id}
  */
  readonly siteId: string;
  /**
  * If the site is not configured in high availability mode, this configuration is optional (if omitted, use DHCP). However, if in high availability mode, static_address is required along with secondary and virtual address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#static_addressing MagicTransitSiteLan#static_addressing}
  */
  readonly staticAddressing?: MagicTransitSiteLanStaticAddressing;
  /**
  * VLAN ID. Use zero for untagged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#vlan_tag MagicTransitSiteLan#vlan_tag}
  */
  readonly vlanTag?: number;
}
export interface MagicTransitSiteLanNat {
  /**
  * A valid CIDR notation representing an IP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#static_prefix MagicTransitSiteLan#static_prefix}
  */
  readonly staticPrefix?: string;
}

export function magicTransitSiteLanNatToTerraform(struct?: MagicTransitSiteLanNat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    static_prefix: cdktn.stringToTerraform(struct!.staticPrefix),
  }
}


export function magicTransitSiteLanNatToHclTerraform(struct?: MagicTransitSiteLanNat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    static_prefix: {
      value: cdktn.stringToHclTerraform(struct!.staticPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MagicTransitSiteLanNatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicTransitSiteLanNat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticPrefix = this._staticPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicTransitSiteLanNat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._staticPrefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._staticPrefix = value.staticPrefix;
    }
  }

  // static_prefix - computed: false, optional: true, required: false
  private _staticPrefix?: string; 
  public get staticPrefix() {
    return this.getStringAttribute('static_prefix');
  }
  public set staticPrefix(value: string) {
    this._staticPrefix = value;
  }
  public resetStaticPrefix() {
    this._staticPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticPrefixInput() {
    return this._staticPrefix;
  }
}
export interface MagicTransitSiteLanRoutedSubnetsNat {
  /**
  * A valid CIDR notation representing an IP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#static_prefix MagicTransitSiteLan#static_prefix}
  */
  readonly staticPrefix?: string;
}

export function magicTransitSiteLanRoutedSubnetsNatToTerraform(struct?: MagicTransitSiteLanRoutedSubnetsNat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    static_prefix: cdktn.stringToTerraform(struct!.staticPrefix),
  }
}


export function magicTransitSiteLanRoutedSubnetsNatToHclTerraform(struct?: MagicTransitSiteLanRoutedSubnetsNat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    static_prefix: {
      value: cdktn.stringToHclTerraform(struct!.staticPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MagicTransitSiteLanRoutedSubnetsNatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicTransitSiteLanRoutedSubnetsNat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticPrefix = this._staticPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicTransitSiteLanRoutedSubnetsNat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._staticPrefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._staticPrefix = value.staticPrefix;
    }
  }

  // static_prefix - computed: false, optional: true, required: false
  private _staticPrefix?: string; 
  public get staticPrefix() {
    return this.getStringAttribute('static_prefix');
  }
  public set staticPrefix(value: string) {
    this._staticPrefix = value;
  }
  public resetStaticPrefix() {
    this._staticPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticPrefixInput() {
    return this._staticPrefix;
  }
}
export interface MagicTransitSiteLanRoutedSubnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#nat MagicTransitSiteLan#nat}
  */
  readonly nat?: MagicTransitSiteLanRoutedSubnetsNat;
  /**
  * A valid IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#next_hop MagicTransitSiteLan#next_hop}
  */
  readonly nextHop: string;
  /**
  * A valid CIDR notation representing an IP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#prefix MagicTransitSiteLan#prefix}
  */
  readonly prefix: string;
}

export function magicTransitSiteLanRoutedSubnetsToTerraform(struct?: MagicTransitSiteLanRoutedSubnets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    nat: magicTransitSiteLanRoutedSubnetsNatToTerraform(struct!.nat),
    next_hop: cdktn.stringToTerraform(struct!.nextHop),
    prefix: cdktn.stringToTerraform(struct!.prefix),
  }
}


export function magicTransitSiteLanRoutedSubnetsToHclTerraform(struct?: MagicTransitSiteLanRoutedSubnets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    nat: {
      value: magicTransitSiteLanRoutedSubnetsNatToHclTerraform(struct!.nat),
      isBlock: true,
      type: "struct",
      storageClassType: "MagicTransitSiteLanRoutedSubnetsNat",
    },
    next_hop: {
      value: cdktn.stringToHclTerraform(struct!.nextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MagicTransitSiteLanRoutedSubnetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MagicTransitSiteLanRoutedSubnets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat = this._nat?.internalValue;
    }
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicTransitSiteLanRoutedSubnets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nat.internalValue = undefined;
      this._nextHop = undefined;
      this._prefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nat.internalValue = value.nat;
      this._nextHop = value.nextHop;
      this._prefix = value.prefix;
    }
  }

  // nat - computed: false, optional: true, required: false
  private _nat = new MagicTransitSiteLanRoutedSubnetsNatOutputReference(this, "nat");
  public get nat() {
    return this._nat;
  }
  public putNat(value: MagicTransitSiteLanRoutedSubnetsNat) {
    this._nat.internalValue = value;
  }
  public resetNat() {
    this._nat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat.internalValue;
  }

  // next_hop - computed: false, optional: false, required: true
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class MagicTransitSiteLanRoutedSubnetsList extends cdktn.ComplexList {
  public internalValue? : MagicTransitSiteLanRoutedSubnets[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MagicTransitSiteLanRoutedSubnetsOutputReference {
    return new MagicTransitSiteLanRoutedSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MagicTransitSiteLanStaticAddressingDhcpRelay {
  /**
  * List of DHCP server IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#server_addresses MagicTransitSiteLan#server_addresses}
  */
  readonly serverAddresses?: string[];
}

export function magicTransitSiteLanStaticAddressingDhcpRelayToTerraform(struct?: MagicTransitSiteLanStaticAddressingDhcpRelay | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    server_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.serverAddresses),
  }
}


export function magicTransitSiteLanStaticAddressingDhcpRelayToHclTerraform(struct?: MagicTransitSiteLanStaticAddressingDhcpRelay | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    server_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.serverAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicTransitSiteLanStaticAddressingDhcpRelay | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddresses = this._serverAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicTransitSiteLanStaticAddressingDhcpRelay | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverAddresses = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverAddresses = value.serverAddresses;
    }
  }

  // server_addresses - computed: false, optional: true, required: false
  private _serverAddresses?: string[]; 
  public get serverAddresses() {
    return this.getListAttribute('server_addresses');
  }
  public set serverAddresses(value: string[]) {
    this._serverAddresses = value;
  }
  public resetServerAddresses() {
    this._serverAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressesInput() {
    return this._serverAddresses;
  }
}
export interface MagicTransitSiteLanStaticAddressingDhcpServerDhcpOptions {
  /**
  * DHCP option number (1-254). Options 0 and 255 are reserved by RFC 2132. Options 3, 6, and 51 are not allowed because they conflict with connector-managed configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#code MagicTransitSiteLan#code}
  */
  readonly code: number;
  /**
  * The type of the option value. text: a string (max 255 bytes). hex: colon-separated hex bytes (e.g. "01:04:aa:bb:cc", max 255 bytes). ip: an IPv4 address (e.g. "10.20.30.40"). byte: an unsigned integer 0-255 (1 byte). short: an unsigned integer 0-65535 (2 bytes). integer: an unsigned integer 0-4294967295 (4 bytes).
  * Available values: "text", "hex", "ip", "byte", "short", "integer".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#type MagicTransitSiteLan#type}
  */
  readonly type: string;
  /**
  * The option value, interpreted according to the type field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#value MagicTransitSiteLan#value}
  */
  readonly value: string;
}

export function magicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsToTerraform(struct?: MagicTransitSiteLanStaticAddressingDhcpServerDhcpOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    code: cdktn.numberToTerraform(struct!.code),
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function magicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsToHclTerraform(struct?: MagicTransitSiteLanStaticAddressingDhcpServerDhcpOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    code: {
      value: cdktn.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MagicTransitSiteLanStaticAddressingDhcpServerDhcpOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicTransitSiteLanStaticAddressingDhcpServerDhcpOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: false, required: true
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList extends cdktn.ComplexList {
  public internalValue? : MagicTransitSiteLanStaticAddressingDhcpServerDhcpOptions[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference {
    return new MagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MagicTransitSiteLanStaticAddressingDhcpServer {
  /**
  * Optional list of custom DHCP options to include in DHCP responses. Only valid when DHCP server is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#dhcp_options MagicTransitSiteLan#dhcp_options}
  */
  readonly dhcpOptions?: MagicTransitSiteLanStaticAddressingDhcpServerDhcpOptions[] | cdktn.IResolvable;
  /**
  * A valid IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#dhcp_pool_end MagicTransitSiteLan#dhcp_pool_end}
  */
  readonly dhcpPoolEnd?: string;
  /**
  * A valid IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#dhcp_pool_start MagicTransitSiteLan#dhcp_pool_start}
  */
  readonly dhcpPoolStart?: string;
  /**
  * A valid IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#dns_server MagicTransitSiteLan#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#dns_servers MagicTransitSiteLan#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Mapping of MAC addresses to IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#reservations MagicTransitSiteLan#reservations}
  */
  readonly reservations?: { [key: string]: string };
}

export function magicTransitSiteLanStaticAddressingDhcpServerToTerraform(struct?: MagicTransitSiteLanStaticAddressingDhcpServer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dhcp_options: cdktn.listMapper(magicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsToTerraform, false)(struct!.dhcpOptions),
    dhcp_pool_end: cdktn.stringToTerraform(struct!.dhcpPoolEnd),
    dhcp_pool_start: cdktn.stringToTerraform(struct!.dhcpPoolStart),
    dns_server: cdktn.stringToTerraform(struct!.dnsServer),
    dns_servers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dnsServers),
    reservations: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.reservations),
  }
}


export function magicTransitSiteLanStaticAddressingDhcpServerToHclTerraform(struct?: MagicTransitSiteLanStaticAddressingDhcpServer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dhcp_options: {
      value: cdktn.listMapperHcl(magicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsToHclTerraform, false)(struct!.dhcpOptions),
      isBlock: true,
      type: "list",
      storageClassType: "MagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList",
    },
    dhcp_pool_end: {
      value: cdktn.stringToHclTerraform(struct!.dhcpPoolEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_pool_start: {
      value: cdktn.stringToHclTerraform(struct!.dhcpPoolStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktn.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_servers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dnsServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    reservations: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.reservations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MagicTransitSiteLanStaticAddressingDhcpServerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicTransitSiteLanStaticAddressingDhcpServer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpOptions = this._dhcpOptions?.internalValue;
    }
    if (this._dhcpPoolEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpPoolEnd = this._dhcpPoolEnd;
    }
    if (this._dhcpPoolStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpPoolStart = this._dhcpPoolStart;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._dnsServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServers = this._dnsServers;
    }
    if (this._reservations !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservations = this._reservations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicTransitSiteLanStaticAddressingDhcpServer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcpOptions.internalValue = undefined;
      this._dhcpPoolEnd = undefined;
      this._dhcpPoolStart = undefined;
      this._dnsServer = undefined;
      this._dnsServers = undefined;
      this._reservations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcpOptions.internalValue = value.dhcpOptions;
      this._dhcpPoolEnd = value.dhcpPoolEnd;
      this._dhcpPoolStart = value.dhcpPoolStart;
      this._dnsServer = value.dnsServer;
      this._dnsServers = value.dnsServers;
      this._reservations = value.reservations;
    }
  }

  // dhcp_options - computed: false, optional: true, required: false
  private _dhcpOptions = new MagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList(this, "dhcp_options", false);
  public get dhcpOptions() {
    return this._dhcpOptions;
  }
  public putDhcpOptions(value: MagicTransitSiteLanStaticAddressingDhcpServerDhcpOptions[] | cdktn.IResolvable) {
    this._dhcpOptions.internalValue = value;
  }
  public resetDhcpOptions() {
    this._dhcpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsInput() {
    return this._dhcpOptions.internalValue;
  }

  // dhcp_pool_end - computed: false, optional: true, required: false
  private _dhcpPoolEnd?: string; 
  public get dhcpPoolEnd() {
    return this.getStringAttribute('dhcp_pool_end');
  }
  public set dhcpPoolEnd(value: string) {
    this._dhcpPoolEnd = value;
  }
  public resetDhcpPoolEnd() {
    this._dhcpPoolEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpPoolEndInput() {
    return this._dhcpPoolEnd;
  }

  // dhcp_pool_start - computed: false, optional: true, required: false
  private _dhcpPoolStart?: string; 
  public get dhcpPoolStart() {
    return this.getStringAttribute('dhcp_pool_start');
  }
  public set dhcpPoolStart(value: string) {
    this._dhcpPoolStart = value;
  }
  public resetDhcpPoolStart() {
    this._dhcpPoolStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpPoolStartInput() {
    return this._dhcpPoolStart;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // reservations - computed: false, optional: true, required: false
  private _reservations?: { [key: string]: string }; 
  public get reservations() {
    return this.getStringMapAttribute('reservations');
  }
  public set reservations(value: { [key: string]: string }) {
    this._reservations = value;
  }
  public resetReservations() {
    this._reservations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationsInput() {
    return this._reservations;
  }
}
export interface MagicTransitSiteLanStaticAddressing {
  /**
  * A valid CIDR notation representing an IP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#address MagicTransitSiteLan#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#dhcp_relay MagicTransitSiteLan#dhcp_relay}
  */
  readonly dhcpRelay?: MagicTransitSiteLanStaticAddressingDhcpRelay;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#dhcp_server MagicTransitSiteLan#dhcp_server}
  */
  readonly dhcpServer?: MagicTransitSiteLanStaticAddressingDhcpServer;
  /**
  * A valid CIDR notation representing an IP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#secondary_address MagicTransitSiteLan#secondary_address}
  */
  readonly secondaryAddress?: string;
  /**
  * A valid CIDR notation representing an IP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#virtual_address MagicTransitSiteLan#virtual_address}
  */
  readonly virtualAddress?: string;
}

export function magicTransitSiteLanStaticAddressingToTerraform(struct?: MagicTransitSiteLanStaticAddressing | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address: cdktn.stringToTerraform(struct!.address),
    dhcp_relay: magicTransitSiteLanStaticAddressingDhcpRelayToTerraform(struct!.dhcpRelay),
    dhcp_server: magicTransitSiteLanStaticAddressingDhcpServerToTerraform(struct!.dhcpServer),
    secondary_address: cdktn.stringToTerraform(struct!.secondaryAddress),
    virtual_address: cdktn.stringToTerraform(struct!.virtualAddress),
  }
}


export function magicTransitSiteLanStaticAddressingToHclTerraform(struct?: MagicTransitSiteLanStaticAddressing | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address: {
      value: cdktn.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_relay: {
      value: magicTransitSiteLanStaticAddressingDhcpRelayToHclTerraform(struct!.dhcpRelay),
      isBlock: true,
      type: "struct",
      storageClassType: "MagicTransitSiteLanStaticAddressingDhcpRelay",
    },
    dhcp_server: {
      value: magicTransitSiteLanStaticAddressingDhcpServerToHclTerraform(struct!.dhcpServer),
      isBlock: true,
      type: "struct",
      storageClassType: "MagicTransitSiteLanStaticAddressingDhcpServer",
    },
    secondary_address: {
      value: cdktn.stringToHclTerraform(struct!.secondaryAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_address: {
      value: cdktn.stringToHclTerraform(struct!.virtualAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MagicTransitSiteLanStaticAddressingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicTransitSiteLanStaticAddressing | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._dhcpRelay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRelay = this._dhcpRelay?.internalValue;
    }
    if (this._dhcpServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpServer = this._dhcpServer?.internalValue;
    }
    if (this._secondaryAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryAddress = this._secondaryAddress;
    }
    if (this._virtualAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualAddress = this._virtualAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicTransitSiteLanStaticAddressing | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._dhcpRelay.internalValue = undefined;
      this._dhcpServer.internalValue = undefined;
      this._secondaryAddress = undefined;
      this._virtualAddress = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._dhcpRelay.internalValue = value.dhcpRelay;
      this._dhcpServer.internalValue = value.dhcpServer;
      this._secondaryAddress = value.secondaryAddress;
      this._virtualAddress = value.virtualAddress;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // dhcp_relay - computed: false, optional: true, required: false
  private _dhcpRelay = new MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference(this, "dhcp_relay");
  public get dhcpRelay() {
    return this._dhcpRelay;
  }
  public putDhcpRelay(value: MagicTransitSiteLanStaticAddressingDhcpRelay) {
    this._dhcpRelay.internalValue = value;
  }
  public resetDhcpRelay() {
    this._dhcpRelay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayInput() {
    return this._dhcpRelay.internalValue;
  }

  // dhcp_server - computed: false, optional: true, required: false
  private _dhcpServer = new MagicTransitSiteLanStaticAddressingDhcpServerOutputReference(this, "dhcp_server");
  public get dhcpServer() {
    return this._dhcpServer;
  }
  public putDhcpServer(value: MagicTransitSiteLanStaticAddressingDhcpServer) {
    this._dhcpServer.internalValue = value;
  }
  public resetDhcpServer() {
    this._dhcpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerInput() {
    return this._dhcpServer.internalValue;
  }

  // secondary_address - computed: false, optional: true, required: false
  private _secondaryAddress?: string; 
  public get secondaryAddress() {
    return this.getStringAttribute('secondary_address');
  }
  public set secondaryAddress(value: string) {
    this._secondaryAddress = value;
  }
  public resetSecondaryAddress() {
    this._secondaryAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryAddressInput() {
    return this._secondaryAddress;
  }

  // virtual_address - computed: false, optional: true, required: false
  private _virtualAddress?: string; 
  public get virtualAddress() {
    return this.getStringAttribute('virtual_address');
  }
  public set virtualAddress(value: string) {
    this._virtualAddress = value;
  }
  public resetVirtualAddress() {
    this._virtualAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualAddressInput() {
    return this._virtualAddress;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan cloudflare_magic_transit_site_lan}
*/
export class MagicTransitSiteLan extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_magic_transit_site_lan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MagicTransitSiteLan resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MagicTransitSiteLan to import
  * @param importFromId The id of the existing MagicTransitSiteLan that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MagicTransitSiteLan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_site_lan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_site_lan cloudflare_magic_transit_site_lan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MagicTransitSiteLanConfig
  */
  public constructor(scope: Construct, id: string, config: MagicTransitSiteLanConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_magic_transit_site_lan',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.21.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._bondId = config.bondId;
    this._haLink = config.haLink;
    this._isBreakout = config.isBreakout;
    this._isPrioritized = config.isPrioritized;
    this._name = config.name;
    this._nat.internalValue = config.nat;
    this._physport = config.physport;
    this._routedSubnets.internalValue = config.routedSubnets;
    this._siteId = config.siteId;
    this._staticAddressing.internalValue = config.staticAddressing;
    this._vlanTag = config.vlanTag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // bond_id - computed: false, optional: true, required: false
  private _bondId?: number; 
  public get bondId() {
    return this.getNumberAttribute('bond_id');
  }
  public set bondId(value: number) {
    this._bondId = value;
  }
  public resetBondId() {
    this._bondId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondIdInput() {
    return this._bondId;
  }

  // ha_link - computed: false, optional: true, required: false
  private _haLink?: boolean | cdktn.IResolvable; 
  public get haLink() {
    return this.getBooleanAttribute('ha_link');
  }
  public set haLink(value: boolean | cdktn.IResolvable) {
    this._haLink = value;
  }
  public resetHaLink() {
    this._haLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haLinkInput() {
    return this._haLink;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_breakout - computed: false, optional: true, required: false
  private _isBreakout?: boolean | cdktn.IResolvable; 
  public get isBreakout() {
    return this.getBooleanAttribute('is_breakout');
  }
  public set isBreakout(value: boolean | cdktn.IResolvable) {
    this._isBreakout = value;
  }
  public resetIsBreakout() {
    this._isBreakout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBreakoutInput() {
    return this._isBreakout;
  }

  // is_prioritized - computed: false, optional: true, required: false
  private _isPrioritized?: boolean | cdktn.IResolvable; 
  public get isPrioritized() {
    return this.getBooleanAttribute('is_prioritized');
  }
  public set isPrioritized(value: boolean | cdktn.IResolvable) {
    this._isPrioritized = value;
  }
  public resetIsPrioritized() {
    this._isPrioritized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrioritizedInput() {
    return this._isPrioritized;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nat - computed: false, optional: true, required: false
  private _nat = new MagicTransitSiteLanNatOutputReference(this, "nat");
  public get nat() {
    return this._nat;
  }
  public putNat(value: MagicTransitSiteLanNat) {
    this._nat.internalValue = value;
  }
  public resetNat() {
    this._nat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat.internalValue;
  }

  // physport - computed: false, optional: true, required: false
  private _physport?: number; 
  public get physport() {
    return this.getNumberAttribute('physport');
  }
  public set physport(value: number) {
    this._physport = value;
  }
  public resetPhysport() {
    this._physport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physportInput() {
    return this._physport;
  }

  // routed_subnets - computed: false, optional: true, required: false
  private _routedSubnets = new MagicTransitSiteLanRoutedSubnetsList(this, "routed_subnets", false);
  public get routedSubnets() {
    return this._routedSubnets;
  }
  public putRoutedSubnets(value: MagicTransitSiteLanRoutedSubnets[] | cdktn.IResolvable) {
    this._routedSubnets.internalValue = value;
  }
  public resetRoutedSubnets() {
    this._routedSubnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routedSubnetsInput() {
    return this._routedSubnets.internalValue;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // static_addressing - computed: false, optional: true, required: false
  private _staticAddressing = new MagicTransitSiteLanStaticAddressingOutputReference(this, "static_addressing");
  public get staticAddressing() {
    return this._staticAddressing;
  }
  public putStaticAddressing(value: MagicTransitSiteLanStaticAddressing) {
    this._staticAddressing.internalValue = value;
  }
  public resetStaticAddressing() {
    this._staticAddressing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticAddressingInput() {
    return this._staticAddressing.internalValue;
  }

  // vlan_tag - computed: false, optional: true, required: false
  private _vlanTag?: number; 
  public get vlanTag() {
    return this.getNumberAttribute('vlan_tag');
  }
  public set vlanTag(value: number) {
    this._vlanTag = value;
  }
  public resetVlanTag() {
    this._vlanTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanTagInput() {
    return this._vlanTag;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.stringToTerraform(this._accountId),
      bond_id: cdktn.numberToTerraform(this._bondId),
      ha_link: cdktn.booleanToTerraform(this._haLink),
      is_breakout: cdktn.booleanToTerraform(this._isBreakout),
      is_prioritized: cdktn.booleanToTerraform(this._isPrioritized),
      name: cdktn.stringToTerraform(this._name),
      nat: magicTransitSiteLanNatToTerraform(this._nat.internalValue),
      physport: cdktn.numberToTerraform(this._physport),
      routed_subnets: cdktn.listMapper(magicTransitSiteLanRoutedSubnetsToTerraform, false)(this._routedSubnets.internalValue),
      site_id: cdktn.stringToTerraform(this._siteId),
      static_addressing: magicTransitSiteLanStaticAddressingToTerraform(this._staticAddressing.internalValue),
      vlan_tag: cdktn.numberToTerraform(this._vlanTag),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktn.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bond_id: {
        value: cdktn.numberToHclTerraform(this._bondId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ha_link: {
        value: cdktn.booleanToHclTerraform(this._haLink),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_breakout: {
        value: cdktn.booleanToHclTerraform(this._isBreakout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_prioritized: {
        value: cdktn.booleanToHclTerraform(this._isPrioritized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat: {
        value: magicTransitSiteLanNatToHclTerraform(this._nat.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MagicTransitSiteLanNat",
      },
      physport: {
        value: cdktn.numberToHclTerraform(this._physport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      routed_subnets: {
        value: cdktn.listMapperHcl(magicTransitSiteLanRoutedSubnetsToHclTerraform, false)(this._routedSubnets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MagicTransitSiteLanRoutedSubnetsList",
      },
      site_id: {
        value: cdktn.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_addressing: {
        value: magicTransitSiteLanStaticAddressingToHclTerraform(this._staticAddressing.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MagicTransitSiteLanStaticAddressing",
      },
      vlan_tag: {
        value: cdktn.numberToHclTerraform(this._vlanTag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
