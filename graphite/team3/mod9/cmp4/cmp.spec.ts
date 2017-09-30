
import { Cmp6394Component } from './cmp';
describe('Cmp6394Component', () => {
  it('should add', () => {
    expect(new Cmp6394Component().add6394(1)).toBe(6395);
  });
});