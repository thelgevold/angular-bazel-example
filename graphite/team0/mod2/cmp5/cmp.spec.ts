
import { Cmp6025Component } from './cmp';
describe('Cmp6025Component', () => {
  it('should add', () => {
    expect(new Cmp6025Component().add6025(1)).toBe(6026);
  });
});