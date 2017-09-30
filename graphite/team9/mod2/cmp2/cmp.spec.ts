
import { Cmp6922Component } from './cmp';
describe('Cmp6922Component', () => {
  it('should add', () => {
    expect(new Cmp6922Component().add6922(1)).toBe(6923);
  });
});