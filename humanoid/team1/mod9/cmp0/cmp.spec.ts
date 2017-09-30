
import { Cmp7190Component } from './cmp';
describe('Cmp7190Component', () => {
  it('should add', () => {
    expect(new Cmp7190Component().add7190(1)).toBe(7191);
  });
});