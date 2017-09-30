
import { Cmp7793Component } from './cmp';
describe('Cmp7793Component', () => {
  it('should add', () => {
    expect(new Cmp7793Component().add7793(1)).toBe(7794);
  });
});