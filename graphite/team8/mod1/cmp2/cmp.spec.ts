
import { Cmp6812Component } from './cmp';
describe('Cmp6812Component', () => {
  it('should add', () => {
    expect(new Cmp6812Component().add6812(1)).toBe(6813);
  });
});