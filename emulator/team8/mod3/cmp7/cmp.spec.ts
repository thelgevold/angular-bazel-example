
import { Cmp4837Component } from './cmp';
describe('Cmp4837Component', () => {
  it('should add', () => {
    expect(new Cmp4837Component().add4837(1)).toBe(4838);
  });
});