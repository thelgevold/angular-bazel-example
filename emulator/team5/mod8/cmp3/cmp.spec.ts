
import { Cmp4583Component } from './cmp';
describe('Cmp4583Component', () => {
  it('should add', () => {
    expect(new Cmp4583Component().add4583(1)).toBe(4584);
  });
});