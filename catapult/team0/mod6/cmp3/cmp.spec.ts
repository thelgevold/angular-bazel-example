
import { Cmp2063Component } from './cmp';
describe('Cmp2063Component', () => {
  it('should add', () => {
    expect(new Cmp2063Component().add2063(1)).toBe(2064);
  });
});