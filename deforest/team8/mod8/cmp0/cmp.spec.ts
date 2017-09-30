
import { Cmp3880Component } from './cmp';
describe('Cmp3880Component', () => {
  it('should add', () => {
    expect(new Cmp3880Component().add3880(1)).toBe(3881);
  });
});