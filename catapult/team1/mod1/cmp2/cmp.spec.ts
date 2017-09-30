
import { Cmp2112Component } from './cmp';
describe('Cmp2112Component', () => {
  it('should add', () => {
    expect(new Cmp2112Component().add2112(1)).toBe(2113);
  });
});