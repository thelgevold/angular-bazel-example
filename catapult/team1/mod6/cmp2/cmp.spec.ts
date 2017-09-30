
import { Cmp2162Component } from './cmp';
describe('Cmp2162Component', () => {
  it('should add', () => {
    expect(new Cmp2162Component().add2162(1)).toBe(2163);
  });
});