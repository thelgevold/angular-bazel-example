
import { Cmp6685Component } from './cmp';
describe('Cmp6685Component', () => {
  it('should add', () => {
    expect(new Cmp6685Component().add6685(1)).toBe(6686);
  });
});