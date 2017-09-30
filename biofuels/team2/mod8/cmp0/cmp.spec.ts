
import { Cmp1280Component } from './cmp';
describe('Cmp1280Component', () => {
  it('should add', () => {
    expect(new Cmp1280Component().add1280(1)).toBe(1281);
  });
});