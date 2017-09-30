
import { Cmp8744Component } from './cmp';
describe('Cmp8744Component', () => {
  it('should add', () => {
    expect(new Cmp8744Component().add8744(1)).toBe(8745);
  });
});