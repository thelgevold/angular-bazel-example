
import { Cmp7385Component } from './cmp';
describe('Cmp7385Component', () => {
  it('should add', () => {
    expect(new Cmp7385Component().add7385(1)).toBe(7386);
  });
});