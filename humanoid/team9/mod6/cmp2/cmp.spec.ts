
import { Cmp7962Component } from './cmp';
describe('Cmp7962Component', () => {
  it('should add', () => {
    expect(new Cmp7962Component().add7962(1)).toBe(7963);
  });
});