
import { Cmp2599Component } from './cmp';
describe('Cmp2599Component', () => {
  it('should add', () => {
    expect(new Cmp2599Component().add2599(1)).toBe(2600);
  });
});