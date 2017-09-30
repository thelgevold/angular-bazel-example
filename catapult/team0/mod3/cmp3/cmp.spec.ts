
import { Cmp2033Component } from './cmp';
describe('Cmp2033Component', () => {
  it('should add', () => {
    expect(new Cmp2033Component().add2033(1)).toBe(2034);
  });
});