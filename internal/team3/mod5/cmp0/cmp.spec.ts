
import { Cmp8350Component } from './cmp';
describe('Cmp8350Component', () => {
  it('should add', () => {
    expect(new Cmp8350Component().add8350(1)).toBe(8351);
  });
});