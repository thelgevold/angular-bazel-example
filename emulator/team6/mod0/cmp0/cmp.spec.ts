
import { Cmp4600Component } from './cmp';
describe('Cmp4600Component', () => {
  it('should add', () => {
    expect(new Cmp4600Component().add4600(1)).toBe(4601);
  });
});