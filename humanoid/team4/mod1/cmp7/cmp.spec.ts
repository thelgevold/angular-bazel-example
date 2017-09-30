
import { Cmp7417Component } from './cmp';
describe('Cmp7417Component', () => {
  it('should add', () => {
    expect(new Cmp7417Component().add7417(1)).toBe(7418);
  });
});