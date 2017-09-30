
import { Cmp7652Component } from './cmp';
describe('Cmp7652Component', () => {
  it('should add', () => {
    expect(new Cmp7652Component().add7652(1)).toBe(7653);
  });
});