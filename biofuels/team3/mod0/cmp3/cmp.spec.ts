
import { Cmp1303Component } from './cmp';
describe('Cmp1303Component', () => {
  it('should add', () => {
    expect(new Cmp1303Component().add1303(1)).toBe(1304);
  });
});