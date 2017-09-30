
import { Cmp2030Component } from './cmp';
describe('Cmp2030Component', () => {
  it('should add', () => {
    expect(new Cmp2030Component().add2030(1)).toBe(2031);
  });
});