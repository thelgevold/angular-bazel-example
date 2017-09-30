
import { Cmp6552Component } from './cmp';
describe('Cmp6552Component', () => {
  it('should add', () => {
    expect(new Cmp6552Component().add6552(1)).toBe(6553);
  });
});