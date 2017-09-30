
import { Cmp2120Component } from './cmp';
describe('Cmp2120Component', () => {
  it('should add', () => {
    expect(new Cmp2120Component().add2120(1)).toBe(2121);
  });
});