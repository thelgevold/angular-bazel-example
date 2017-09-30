
import { Cmp8029Component } from './cmp';
describe('Cmp8029Component', () => {
  it('should add', () => {
    expect(new Cmp8029Component().add8029(1)).toBe(8030);
  });
});