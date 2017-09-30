
import { Cmp7210Component } from './cmp';
describe('Cmp7210Component', () => {
  it('should add', () => {
    expect(new Cmp7210Component().add7210(1)).toBe(7211);
  });
});