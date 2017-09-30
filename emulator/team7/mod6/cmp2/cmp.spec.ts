
import { Cmp4762Component } from './cmp';
describe('Cmp4762Component', () => {
  it('should add', () => {
    expect(new Cmp4762Component().add4762(1)).toBe(4763);
  });
});